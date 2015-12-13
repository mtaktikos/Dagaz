package com.gluk.dagaz.api.state;

import com.gluk.dagaz.api.runtime.ICommand;
import com.gluk.dagaz.api.runtime.IProcessor;
import com.gluk.dagaz.exceptions.CommonException;

public interface IDeferredCheck extends IState {
	void addDeferredCommand(ICommand c);                                          // Добавить команду для отложенной проверки
	boolean check(IProcessor processor, IEnvironment env) throws CommonException; // Выполнить отложенную проверку
}