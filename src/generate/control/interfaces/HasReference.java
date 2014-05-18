package generate.control.interfaces;

public interface HasReference extends IsGenerateInterface, HasMessageProcessing, HasTextRuleScript
{
	void setReference(String[] reference);

	String[] getReference();
}
