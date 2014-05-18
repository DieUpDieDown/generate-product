package generate.log;

import generate.control.interfaces.HasName;
import generate.events.Message.MessageType;
import generate.form.MainFrame;

import java.text.MessageFormat;

public class LogUtils {
	private LogUtils() {
	}

	public static void logInfo(String content) {
		MainFrame.getInstance().getLog4j().log(content);
	}

	public static void logError(Exception ex) {
		MainFrame.getInstance().getLog4j().log(ex.getMessage());
	}

	public static void logGit(String content) {
		MainFrame.getInstance().getLog4Git().log(content);
	}

	public static void logImage(String content) {
		System.out.println(content);
	}

	public static void logCopyFile(String content) {
		MainFrame.getInstance().getLog4CopyFile().log(content);
	}

	public static void logEvents(HasName source, MessageType messageType,
			String messageContent) {
		System.out.println(MessageFormat.format(
				"Source:{0};	MessageType:{1};	Content:{2}", source.getName(),
				messageType, messageContent));
		MainFrame
				.getInstance()
				.getLog4j()
				.log(MessageFormat.format(
						"Source:{0};	MessageType:{1};	Content:{2}",
						source.getName(), messageType, messageContent));
	}
}
