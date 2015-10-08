package com.gluk.dagaz.random;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class CopyableRandom extends Random {
	
    static final long serialVersionUID = 3905348978240129619L;
	
	  private final static long multiplier = 0x5DEECE66DL;
	  private final static long addend = 0xBL;
	  private final static long mask = (1L << 48) - 1;

	  private static volatile long seedUniquifier = 8682522807148012L;

	  private final AtomicLong seed = new AtomicLong(0L);

	  public CopyableRandom() { 
		  this(++seedUniquifier + System.nanoTime()); 
	  }

	  public CopyableRandom(long seed) { 
		  this.seed.set((seed ^ multiplier) & mask); 
	  }
	  
	  @Override
	  protected int next(int bits)
	  {
	    long oldseed, nextseed;
	    AtomicLong seed_ = this.seed;
	    do
	    {
	      oldseed = seed_.get();
	      nextseed = (oldseed * multiplier + addend) & mask;
	    } while (!seed_.compareAndSet(oldseed, nextseed));
	    return (int) (nextseed >>> (48 - bits));
	  }

	  public CopyableRandom copy() { 
		  return new CopyableRandom((seed.get() ^ multiplier) & mask); 
	  }
}
