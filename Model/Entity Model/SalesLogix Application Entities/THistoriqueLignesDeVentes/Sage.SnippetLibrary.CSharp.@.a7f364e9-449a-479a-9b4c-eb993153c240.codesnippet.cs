/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="a7f364e9-449a-479a-9b4c-eb993153c240">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>RegleTesteStep</name>
 <references>
  <reference>
   <assemblyName>Sage.Entity.Interfaces.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\interfaces\bin\Sage.Entity.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Form.Interfaces.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\formInterfaces\bin\Sage.Form.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\assemblies\Sage.Platform.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.SalesLogix.API.dll</assemblyName>
  </reference>
 </references>
</snippetHeader>
*/


#region Usings
using System;
using Sage.Entity.Interfaces;
using Sage.Form.Interfaces;
using Sage.SalesLogix.API;
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class THistoriqueLignesDeVentesBusinessRules
    {
        public static void RegleTesteStep( ITHistoriqueLignesDeVentes thistoriquelignesdeventes,  out System.Collections.Generic.IList<Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes> result)
        {
            // TODO: Complete business rule implementation
			 result = new System.Collections.Generic.List<ITHistoriqueLignesDeVentes>();
        }
    }
}
