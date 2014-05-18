package generate.control.interfaces;

public interface HasMultiReplace extends IsGenerateInterface
{
	String[] getFindTexts();

	void setFindTexts(String[] findText);

	String[] getReplaceTexts();

	void setReplaceTexts(String[] replaceText);

	boolean isLiteral();

	void setLiteral(boolean isInterval);
}
