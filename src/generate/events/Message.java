package generate.events;

import generate.control.interfaces.HasName;


public class Message
{
	public static enum MessageType
	{
		ReferenceValueChange, ValueChange, ReferenceChange
	}

	private HasName source;
	private MessageType messageType;

	public Message(HasName source, MessageType messageType)
	{
		this.setSource(source);
		this.setMessageType(messageType);
	}

	public HasName getSource()
	{
		return source;
	}

	public void setSource(HasName source)
	{
		this.source = source;
	}

	public MessageType getMessageType()
	{
		return messageType;
	}

	public void setMessageType(MessageType messageType)
	{
		this.messageType = messageType;
	}
}
