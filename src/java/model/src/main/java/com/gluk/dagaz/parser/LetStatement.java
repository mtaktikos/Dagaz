package com.gluk.dagaz.parser;

import com.gluk.dagaz.api.model.IReserved;
import com.gluk.dagaz.api.runtime.ICommand;
import com.gluk.dagaz.exceptions.CommonException;
import com.gluk.dagaz.runtime.CommandFactory;

public class LetStatement extends AbstractStatement {

	private String name = null;
	private ICommand letCommand = null;

	private void addLetCommand() throws CommonException {
		letCommand = CommandFactory.getInstance().createCommand(IReserved.CMD_LET, build);
		build.addCommand(letCommand);
		letCommand.addArgument(name);
		build.addLocalName(name);
	}
	
	@Override
	public void addOperand(String name) throws CommonException {
		if (this.name != null) {
			if (letCommand != null) {
				throw new CommonException("Syntax error");
			}
			addLetCommand();
		}
		this.name = name;
	}

	@Override
	public void closeChild() throws CommonException {
		super.closeChild();
		if ((name == null) || (letCommand != null)) {
			throw new CommonException("Syntax error");
		}
		addLetCommand();
	}
}
