package generate.library;

import java.util.Timer;
import java.util.TimerTask;



public class TaskUtils
{
	private TaskUtils()
	{
	}

	public static Timer createDelayTask(TimerTask task, int delay)
	{
		Timer timer = new Timer();
		timer.schedule(task, delay);
		return timer;
	}

	public static Timer createScheduleTask(TimerTask task, int delay, int times)
	{
		Timer timer = new Timer();
		timer.schedule(task, delay, delay);
		return timer;
	}

	public static Timer createScheduleTask(TimerTask task, int delay)
	{
		return createScheduleTask(task, delay, 0);
	}
}
