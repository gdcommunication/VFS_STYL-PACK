/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="ded6102b-4f4e-476b-9edc-cf467aa83793">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>OnLoad2Step</name>
 <references>
  <reference>
   <assemblyName>Sage.Form.Interfaces.dll</assemblyName>
   <hintPath>C:\Users\administrateur.STYL-PACK\AppData\Roaming\Sage\Platform\Output\STYLPACK\formInterfaces\bin\Sage.Form.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.dll</assemblyName>
   <hintPath>C:\Users\administrateur.STYL-PACK\AppData\Roaming\Sage\Platform\Output\STYLPACK\assemblies\Sage.Platform.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.AdminModule.dll</assemblyName>
   <hintPath>C:\Users\administrateur.STYL-PACK\AppData\Roaming\Sage\Platform\Output\STYLPACK\assemblies\Sage.Platform.AdminModule.dll</hintPath>
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
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class AccountDetailsEventHandlers
    {
        public static void OnLoad2Step( IAccountDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			Sage.Entity.Interfaces.IAccount acc=form.CurrentEntity as Sage.Entity.Interfaces.IAccount;

			form.QFTextBox.Items.Clear();
			form.QFListBox.Items.Clear();
			
			string mytext = "";
			string myvalue = "";
            if (!(string.IsNullOrEmpty(acc.InternalAccountNumber))) 
			{
				mytext = "SPF: "+acc.InternalAccountNumber.ToString();
				myvalue = "SPF: "+acc.InternalAccountNumber.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);
			}
			else 
			{
				//acc.InternalAccountNumber = acc.ACCID.ToString();
				mytext = "SPF: "+acc.ACCID.ToString();
				myvalue = "SPF: "+acc.ACCID.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);			
			}
            if (!(string.IsNullOrEmpty(acc.UserField2)))   
			{		
				mytext = "PAP: "+acc.UserField3.ToString();
				myvalue = "PAP: "+acc.UserField3.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);
			}
			else 
			{
				//acc.UserField3 = acc.ACCID.ToString();
				mytext = "PAP: "+acc.ACCID.ToString();
				myvalue = "PAP: "+acc.ACCID.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);			
			}

			if (!(string.IsNullOrEmpty(acc.UserField3)))   
			{		
				mytext = "PAV: "+acc.UserField2.ToString();
				myvalue = "PAV: "+acc.UserField2.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);
			}
			else 
			{
				//acc.UserField2 = acc.ACCID.ToString();
				mytext = "PAV: "+acc.ACCID.ToString();
				myvalue = "PAV: "+acc.ACCID.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);			
			}

            if (!(string.IsNullOrEmpty(acc.UserField4)))   
			{				
				mytext = "CDO: "+acc.UserField4.ToString();
				myvalue = "CDO: "+acc.UserField4.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);
			}
			else 
			{
				//acc.UserField4 = acc.ACCID.ToString();
				mytext = "CDO: "+acc.ACCID.ToString();
				myvalue = "CDO: "+acc.ACCID.ToString();
				form.QFTextBox.Items.Add(mytext,myvalue);			
			}

			
            if (!(string.IsNullOrEmpty(acc.TCompteInformations.FDVSPF)))   
			{				
				mytext = "SPF: "+acc.TCompteInformations.FDVSPF.ToString();
				myvalue = "SPF: "+acc.TCompteInformations.FDVSPF.ToString();
				form.QFListBox.Items.Add(mytext,myvalue);
			}
            
			if (!(string.IsNullOrEmpty(acc.TCompteInformations.FDVPAV)))  
			{				
				mytext = "PAV: "+acc.TCompteInformations.FDVPAV.ToString();
				myvalue = "PAV: "+acc.TCompteInformations.FDVPAV.ToString();
				form.QFListBox.Items.Add(mytext,myvalue);
			}
            if (!(string.IsNullOrEmpty(acc.TCompteInformations.FDVPCL)))
			{				
				mytext = "PCL: "+acc.TCompteInformations.FDVPCL.ToString();
				myvalue = "PCL: "+acc.TCompteInformations.FDVPCL.ToString();
				form.QFListBox.Items.Add(mytext,myvalue);
			}
            if (!(string.IsNullOrEmpty(acc.TCompteInformations.FDVCDO)))
			{				
				mytext = "CDO: "+acc.TCompteInformations.FDVCDO.ToString();
				myvalue = "CDO: "+acc.TCompteInformations.FDVCDO.ToString();
				form.QFListBox.Items.Add(mytext,myvalue);
			}

		//chargement de nom et prenom contact	
		string Sql="";
		if (!(string.IsNullOrEmpty(acc.ACCID)))
		{
			
			Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            {
                conn.Open();
				Sql="SELECT ISNULL(LASTNAME,'') AS LN, ISNULL(FIRSTNAME,'') AS FN, ISNULL(MIDDLENAME,'') AS MN, ISNULL(TITLE,'') AS TT, ISNULL(STATUS,'') AS S, ISNULL(SALUTATION,'') AS SAL FROM sysdba.CONTACT WHERE ISPRIMARY = 'T' AND ACCOUNTID = '" + acc.ACCID.ToString() + "'" ;
					
									
				using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                  {          
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{						
								form.QFNOM.Text = groupement["LN"].ToString();
								form.QFPRENOM.Text = groupement["FN"].ToString();
								form.QFTITRE.Text = groupement["SAL"].ToString();
							}
					}

				conn.Close();
			}
			

		}
			

		
		
		
		
		}
    }
}
