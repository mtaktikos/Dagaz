package com.gluk.dagaz.runtime;

import com.gluk.dagaz.api.model.IReserved;
import com.gluk.dagaz.api.runtime.IProcessor;
import com.gluk.dagaz.api.state.IDeferredCheck;
import com.gluk.dagaz.api.state.IEnvironment;
import com.gluk.dagaz.api.state.IValue;
import com.gluk.dagaz.exceptions.CommonException;

public class DecCommand extends AbstractCommand { // -- n

	private String name = null;

	public DecCommand() {
		super(IReserved.CMD_DEC);
	}

	@Override
	public void addArgument(Object arg) throws CommonException {
		if ((name != null) || !(arg instanceof String)) {
			throw new CommonException("Invalid argument");
		}
		name = (String)arg;
		super.addArgument(arg);
	}

	public boolean execute(IProcessor processor, IDeferredCheck state, IEnvironment env) throws CommonException {
		if (name == null) {
			throw new CommonException("Invalid arguments");
		}
		IValue v = env.get(name);
		env.set(name, Value.create(v.getNumber() - 1));
		processor.getStack().push(v);
		return true;
	}
}