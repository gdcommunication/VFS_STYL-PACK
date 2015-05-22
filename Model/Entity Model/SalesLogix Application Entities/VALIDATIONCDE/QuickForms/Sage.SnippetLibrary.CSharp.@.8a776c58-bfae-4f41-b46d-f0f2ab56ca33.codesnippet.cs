/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="8a776c58-bfae-4f41-b46d-f0f2ab56ca33">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFSAVE_OnClickStep</name>
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
    public static partial class CorrectionBlocageEventHandlers
    {
        public static void QFSAVE_OnClickStep( ICorrectionBlocage form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			IVALIDATIONCDE validation = form.CurrentEntity as IVALIDATIONCDE;

			Sage.SalesLogix.Security.SLXUserService usersvc = (Sage.SalesLogix.Security.SLXUserService)Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Security.IUserService>();
			Sage.Entity.Interfaces.IUser user = usersvc.GetUser();
			
	
			validation.ModifyDate = DateTime.UtcNow ;
			if (form.QFRemarques.Text != "")
			{
					validation.RaisonBlocage = validation.RaisonBlocage + " Remarque: "+form.QFRemarques.Text.ToString();
			}
			
			if (form.QFDebloque.Checked == true )
			{
				validation.DateDeblocage = DateTime.UtcNow ;
				validation.Debloquee = 1;
				validation.UtilDeblocage = user.UserName.ToString();
			}
			else
			{
				validation.DateDeblocage = DateTime.UtcNow ;
				validation.Debloquee = 0;
				validation.UtilDeblocage = user.UserName.ToString();
				
			}
			
			
			validation.Save();
			
			
        }
    }
}