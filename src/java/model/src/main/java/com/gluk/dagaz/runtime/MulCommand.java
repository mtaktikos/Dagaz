package com.gluk.dagaz.runtime;

import com.gluk.dagaz.api.runtime.IProcessor;
import com.gluk.dagaz.api.state.IDeferredCheck;
import com.gluk.dagaz.api.state.IEnvironment;
import com.gluk.dagaz.exceptions.CommonException;

public class MulCommand extends AbstractCommand { // n ... -- n

	private int arity = 0;

	public MulCommand() {
		super("mul");
	}

	public void addArgument(Object arg) throws CommonException {
		if (!(arg instanceof Integer)) {
			throw new CommonException("Invalid argument");
		}
		arity = (Integer)arg;
		super.addArgument(arg);
	}
	
	public boolean execute(IProcessor processor, IDeferredCheck state, IEnvironment env) throws CommonException { 
		int r = 1;
		for (int i = 0; i < arity; i++) {
			r *= processor.getStack().pop().getNumber();
		}
		processor.getStack().push(Value.create(r));
		return true;
	}
}