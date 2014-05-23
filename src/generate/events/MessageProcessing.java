package generate.events;

import generate.control.interfaces.HasMessageProcessing;
import generate.events.Message.MessageType;
import generate.library.ScheduleTask;

import java.util.ArrayList;
import java.util.List;

public abstract class MessageProcessing {
	private final List<Message> lstMessage = new ArrayList<Message>();
	private boolean hasReferenceValueChange = false;
	@SuppressWarnings("unused")
	private HasMessageProcessing hasMessageProcessing;

	public MessageProcessing(HasMessageProcessing hasMessageProcessing) {
		this.hasMessageProcessing = hasMessageProcessing;
	}

	private ScheduleTask timer = new ScheduleTask(100) {
		public void runTask() {
			if (hasReferenceValueChange) {
				hasReferenceValueChangeProcessing();
				hasReferenceValueChange = false;
			}

			lstMessage.clear();
		};
	};

	public void putMessage(Message message) {
		lstMessage.add(message);
		if (message.getMessageType().equals(MessageType.ReferenceValueChange)) {
			hasReferenceValueChange = true;
		}
		timer.run();
	}

	abstract public void hasReferenceValueChangeProcessing();
}
