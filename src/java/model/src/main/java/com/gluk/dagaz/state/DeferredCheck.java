package com.gluk.dagaz.state;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.gluk.dagaz.api.runtime.ICommand;
import com.gluk.dagaz.api.state.IDeferredCheck;
import com.gluk.dagaz.api.state.IEnvironment;
import com.gluk.dagaz.exceptions.CommonException;

public abstract class DeferredCheck implements IDeferredCheck {
	
	private IEnvironment env = null;
	private List<ICommand> commands = new ArrayList<ICommand>();
	
	public Collection<ICommand> getDeferredCommands() {
		return commands;
	}

	public void addDeferredCommand(ICommand c) {
		if (!commands.contains(c)) {
			commands.add(c);
		}
	}
	
	public void setEnvironment(IEnvironment env) {
		this.env = env;
	}

	public boolean check() throws CommonException {
		if ((env == null) || commands.isEmpty()) {
			return true;
		}
		for (ICommand c: commands) {
			if (!c.execute(this, env)) {
				return false;
			}
		}
		return true;
	}
}
