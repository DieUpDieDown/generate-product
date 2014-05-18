package generate.events;

import generate.control.interfaces.HasMessageProcessing;
import generate.events.Message.MessageType;
import generate.library.TaskUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

public abstract class MessageProcessing {
	private final List<Message> lstMessage = new ArrayList<Message>();
	private boolean hasReferenceValueChange = false;
	@SuppressWarnings("unused")
	private HasMessageProcessing hasMessageProcessing;

	public MessageProcessing(HasMessageProcessing hasMessageProcessing) {
		this.hasMessageProcessing = hasMessageProcessing;
	}

	private TimerTask task = new TimerTask() {
		@Override
		public void run() {
			if (hasReferenceValueChange) {
				hasReferenceValueChangeProcessing();
				hasReferenceValueChange = false;
			}

			lstMessage.clear();
		}
	};
	@SuppressWarnings("unused")
	private Timer timer = TaskUtils.createScheduleTask(task,
			new Random().nextInt(100) + 100);

	public void putMessage(Message message) {
		lstMessage.add(message);
		if (message.getMessageType().equals(MessageType.ReferenceValueChange)) {
			hasReferenceValueChange = true;
		}
	}

	abstract public void hasReferenceValueChangeProcessing();
}
