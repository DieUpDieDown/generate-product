package generate.control.interfaces;

public interface HasReplace extends IsGenerateInterface {
	String getFindText();

	void setFindText(String findText);

	String getReplaceText();

	void setReplaceText(String replaceText);

	boolean isLiteral();

	void setLiteral(boolean isLiteral);

}
