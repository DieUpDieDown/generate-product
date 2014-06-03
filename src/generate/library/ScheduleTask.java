package generate.library;

import java.util.Timer;
import java.util.TimerTask;

public abstract class ScheduleTask {

	private TimerTask task;
	private Timer timer = null;
	private int delay;

	public ScheduleTask(int delay) {

		this.delay = delay;
	}

	public void run() {
		if (timer == null) {
			this.task = new TimerTask() {

				@Override
				public void run() {
					runTask();
					timer = null;
				}
			};
			timer = new Timer();
			timer.schedule(task, delay);
		}
	}

	protected abstract void runTask();
}
