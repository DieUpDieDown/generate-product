package generate.events;

import generate.control.interfaces.HasName;
import generate.control.interfaces.HasReference;
import generate.events.Message.MessageType;
import generate.library.TaskUtils;
import generate.log.LogUtils;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.TimerTask;

public class MessageUtils {
	private static MessageUtils instance = null;
	private Map<String, Set<HasReference>> mapNameHasReference = new HashMap<String, Set<HasReference>>();
	private boolean isReady = false;

	public static final MessageUtils getInstance() {
		if (instance == null) {
			instance = new MessageUtils();
		}
		return instance;
	}

	public void putValueChangeMessage(HasName source) {
		if (!isReady) {
			TaskUtils.createDelayTask(new TimerTask() {

				@Override
				public void run() {
					isReady = true;
				}
			}, 789);
			return;
		}
		LogUtils.logEvents(source, MessageType.ValueChange, "");
		if (source.getName() != null && source.getName().length() > 0
				&& mapNameHasReference.get(source.getName()) != null) {
			for (HasReference hasReference : mapNameHasReference.get(source
					.getName())) {
				if (hasReference instanceof HasName) {
					LogUtils.logEvents((HasName) hasReference,
							MessageType.ReferenceValueChange, source.getName()
									+ " value change");
				}
				hasReference.putMessage(new Message(source,
						MessageType.ReferenceValueChange));
			}
		}
	}

	public void putReferenceChange(HasReference hasReference) {
		if (hasReference.getReference() != null) {
			for (String referenceName : hasReference.getReference()) {
				if (mapNameHasReference.get(referenceName) == null) {
					mapNameHasReference.put(referenceName,
							new HashSet<HasReference>());
				}
				mapNameHasReference.get(referenceName).add(hasReference);
			}
		}
	}
}
