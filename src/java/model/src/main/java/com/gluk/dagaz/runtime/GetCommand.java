package com.gluk.dagaz.runtime;

import com.gluk.dagaz.api.model.IReserved;
import com.gluk.dagaz.api.runtime.IProcessor;
import com.gluk.dagaz.api.state.IDeferredCheck;
import com.gluk.dagaz.api.state.IEnvironment;
import com.gluk.dagaz.api.state.IValue;
import com.gluk.dagaz.exceptions.CommonException;

public class GetCommand extends AbstractCommand { // [s] -- v
	
	private String name = null;

	public GetCommand() {
		super(IReserved.CMD_GET);
	}

	@Override
	public void addArgument(Object arg) throws CommonException {
		if ((name != null) || !(arg instanceof String)) {
			throw new CommonException("Invalid argument");
		}
		name = (String)arg;
		super.addArgument(arg);
	}
	
	@Override
	public String getValueName() {
		return name;
	}
	
	public boolean execute(IProcessor processor, IDeferredCheck state, IEnvironment env) throws CommonException {
		String operand = name;
		if (operand == null) {
			if (processor.getStack().isEmpty()) {
				throw new CommonException("Stack is empty");
			}
			operand = processor.getStack().pop().getString();
		}
		IValue value = null;
		if (!operand.isEmpty() && env.isDefined(operand)) { 
			value = env.get(operand);
			if (value.isReference()) {
				value = env.get(value.getString());
			}
		} else {
			value = Value.create("");
		}
		processor.getStack().push(value);
		return true;
	}
}