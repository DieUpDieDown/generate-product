package generate.core;

import generate.control.interfaces.HasName;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;


public class NameUtils
{
	private NameUtils()
	{
	}

	private static final Map<String, Set<HasName>> mapNameHasName = new HashMap<String, Set<HasName>>();
	private static final Map<HasName, String> mapHasNameName = new HashMap<HasName, String>();

	public static void putHasName(HasName hasName)
	{
		if (mapHasNameName.get(hasName)!=null){
			mapNameHasName.get(mapHasNameName.get(hasName)).remove(hasName);
		}
		if (hasName.getName()==null || hasName.getName().length()==0){
			return;
		}
		mapHasNameName.put(hasName, hasName.getName());
		if (mapNameHasName.get(hasName.getName())==null){
			mapNameHasName.put(hasName.getName(), new HashSet<HasName>());
		}
		mapNameHasName.get(hasName.getName()).add(hasName);
	}
	
	public static Set<HasName> getSetHasNames(String name){
		return mapNameHasName.get(name);
	}
}
