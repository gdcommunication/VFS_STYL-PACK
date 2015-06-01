/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="19a72f4b-3b67-43e0-b359-ca29df68e2c7">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFInformer_OnChangeStep</name>
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
using System.Net.Mail;
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class InsertTicketEventHandlers
    {
        public static void QFInformer_OnChangeStep( IInsertTicket form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			
			ITicket tic = form.CurrentEntity as ITicket;
				

			Sage.SalesLogix.Security.SLXUserService usersvc = (Sage.SalesLogix.Security.SLXUserService)Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Security.IUserService>();
			Sage.Entity.Interfaces.IUser user = usersvc.GetUser();			
			
//Get user entity
			string Sql="";			
			string mytext="";									
			string mybody="";
			string myorder="";
			string cial="vladimir_d@bit.bg";
			Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            		{
            			conn.Open();
						Sql="SELECT ISNULL(REGION,'') AS RES FROM sysdba.USERINFO WHERE USERID='" + user.Id.ToString()+ "'  " ;
						
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
							{
								mytext = groupement["RES"].ToString();
										
							}

							
							
					}
					
						
						
//CIAL MAIL						
						if (!(string.IsNullOrEmpty(tic.Account.TCompteInformations.FDVSPF))) 
						{
							Sql="SELECT ISNULL(EMAIL,'') AS RES FROM sysdba.USERINFO AS UI LEFT JOIN sysdba.USERSECURITY AS US ON UI.USERID=US.USERID WHERE USERCODE='"+tic.Account.TCompteInformations.FDVSPF.ToString()+"' AND REGION='"+mytext+"'";
						}
						
						else
						{
							Sql="SELECT ISNULL(EMAIL,'') AS RES FROM sysdba.USERINFO AS UI LEFT JOIN sysdba.USERSECURITY AS US ON UI.USERID=US.USERID WHERE USERCODE='MDO' AND REGION='"+mytext+"'";
						}
						
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
							{
								cial = groupement["RES"].ToString();
										
							}

							
							
					}



						
					if (!(string.IsNullOrEmpty(tic.UserField2))) 
					{	
						Sql="SELECT 'PJEX'+ ISNULL([ALTERNATEKEYSUFFIX],'') AS RES FROM sysdba.SALESORDER WHERE SALESORDERID ='"+tic.UserField2.ToString()+"'" ;
						
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
							{
								myorder = groupement["RES"].ToString();
										
							}

							
							
						}
						
					}
						
						
					
				conn.Close();
			}
			
//determine mail
			string mymail ="";
			if (mytext =="STYLPACK")
			{
					mymail ="snogue@styl-pack.fr";
			}
			else
			{
				if (mytext =="PCL")
				{
					mymail ="sjouan@pcl-sa.com";
				}
				else
				{
					mymail ="vdimitrov@yopak.net";
				}
			}

//process logic							
			mybody="N de cde: "+myorder+"\r";
			
			if (!(string.IsNullOrEmpty(tic.UserField3))) 
			{
				mybody=mybody+"N de ligne de cde: "+tic.UserField3.ToString()+"\r";
			}
			else
			{
				mybody=mybody+"N de ligne de cde: "+"\r";
			}
			if (mytext =="STYLPACK")
			{
				if (!(string.IsNullOrEmpty("Code client: "+tic.Account.InternalAccountNumber))) 
				{
					mybody=mybody+"Code client: "+tic.Account.InternalAccountNumber.ToString()+"\r";
				}
				else
				{
					mybody=mybody+"Code client: "+"\r";
				}
			}
			else
			{
				if (mytext =="PCL")
				{
					if (!(string.IsNullOrEmpty(tic.Account.UserField3))) 
					{
						mybody=mybody+"Code client: "+tic.Account.UserField3.ToString()+"\r";
					}
					else
					{
							mybody=mybody+"Code client: "+"\r";
					}
				}
				else
				{
					if (!(string.IsNullOrEmpty("Code client: "+tic.Account.InternalAccountNumber))) 
					{
						mybody=mybody+"Code client: "+tic.Account.InternalAccountNumber.ToString()+"\r";
					}
					else
					{
						mybody=mybody+"Code client: "+"\r";
					}

				}
			}

			if (!(string.IsNullOrEmpty("Nom du client: "+tic.Account.AccountName))) 
			{
				mybody=mybody+"Nom du client: "+tic.Account.AccountName.ToString()+"\r";
			}
			else
			{
				mybody=mybody+"Nom du client: "+"\r";
			}
//send mail
				
				MailMessage mail = new MailMessage("slx@styl-pack.fr", mymail);
				SmtpClient client = new SmtpClient();
				client.Port = 25;
				client.DeliveryMethod = SmtpDeliveryMethod.Network;
				client.UseDefaultCredentials = false;
				client.Host = "smtpadsl.oceanet-technology.com";
				mail.Subject = "Ouverture de nouveau ticket";
				mail.Body =  mybody;
				client.Send(mail);			

				MailMessage mail1 = new MailMessage("slx@styl-pack.fr", cial);
				mail1.Subject = "Ouverture de nouveau ticket";
				mail1.Body =  mybody;
				client.Send(mail1);			
				
				

					
				
				
			
			
			
			
			
        }
    }
}