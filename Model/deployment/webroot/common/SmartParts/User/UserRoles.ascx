<%@ Control Language="C#" ClassName="UserRoles" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
<%@ Register Assembly="Sage.SalesLogix.Client.GroupBuilder" Namespace="Sage.SalesLogix.Client.GroupBuilder" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.PickList" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.DependencyLookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Lookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Timeline" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.HighLevelTypes" Namespace="Sage.SalesLogix.HighLevelTypes" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.Platform.WebPortal" Namespace="Sage.Platform.WebPortal.SmartParts" TagPrefix="SalesLogix" %>

<%//------------------------------------------------------------------------
//This file was generated by a tool.  Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//------------------------------------------------------------------------ %>
   <%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.ScriptResourceProvider" TagPrefix="SalesLogix" %>
  <%--Grid style overrides for quickform configurations and textbox compatibility with IE7.--%>
<style 
type="text/css">     
    .alignleft { text-align : left; }
    .alignright { text-align : right; }
    .aligncenter { text-align : center; }
	.dijitTextBox { width: auto; }
	.ISOSpace {width: 75% !important; }
</style>

			

<SalesLogix:ScriptResourceProvider ID="UserRolesgrdRoles_AddRelationTool_Strings" runat="server">
    <Keys>
        <SalesLogix:ResourceKeyName Key="grdRoles_AddRelationTool.ButtonTooltip" />
        <SalesLogix:ResourceKeyName Key="grdRoles_AddRelationTool.LookupDialogTitle" />
        <SalesLogix:ResourceKeyName Key="grdRoles_AddRelationTool.DialogButtonText" />
						<SalesLogix:ResourceKeyName Key="grdRoles_AddRelationTool.LookupProperties.RoleName.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="grdRoles_AddRelationTool.LookupProperties.RoleDescription.PropertyHeader" />
		       </Keys>
</SalesLogix:ScriptResourceProvider>

	  	   

<SalesLogix:ScriptResourceProvider ID="UserRolesgrdRoles_Strings" runat="server">
    <Keys>
          <SalesLogix:ResourceKeyName Key="grdRoles.67620def-0232-4382-ad67-e8cdd30779af.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdRoles.b495e985-92d7-43cf-b279-9b67507ef789.ColumnHeading" />
           <SalesLogix:ResourceKeyName Key="grdRoles.Relate.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdRoles.Delete.ToolTip" />
     </Keys>
</SalesLogix:ScriptResourceProvider>

		 





























<div style="display:none;">
  <asp:TextBox runat="server" ID="UserRolesgrdRoles_DataCarrier" class="UserRolesgrdRoles_DataCarrier" ></asp:TextBox>
</div>
  <div id="UserRolesgrdRoles_Container" style="width:100%;height:100%;" class="">
    <div id="UserRolesgrdRoles_Grid" style="width:100%;height:100%;"
     data-dojo-type="dijit.layout.BorderContainer"
></div>
</div>


 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="UserRoles_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=UserRoles&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkUserRolesHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="UserRoles" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
 </SalesLogix:SmartPartToolsContainer>



<script runat="server" type="text/C#">
/// <summary>
/// Gets or sets the role security service.
/// </summary>
/// <value>The role security service.</value>
[Sage.Platform.Application.ServiceDependency]
public Sage.Platform.Security.IRoleSecurityService RoleSecurityService { get; set; }

public override Type EntityType
{
    get { return typeof(Sage.Entity.Interfaces.IUser); }
}

 

protected override void OnAddEntityBindings() {
    
   
}
       
protected void grdRoles_InsertAssociationAction(object sender, EventArgs e) {

	    string text = Request.Form.Get(UserRolesgrdRoles_DataCarrier.UniqueID);
    if (text.Length > 0)
    {
    var feed = new Sage.Integration.Entity.Feeds.UserRoleFeed();

		using (var stream = new System.IO.MemoryStream(Encoding.UTF8.GetBytes(text)))
		{
			new Sage.Common.Syndication.JsonSerializer().LoadFromStream<Sage.Integration.Entity.Feeds.UserRoleEntry>(feed, stream);
		}

		if (feed == null) return;
		var transformer =
			Sage.Platform.Application.ApplicationContext.Current.Services.Get
				<Sage.Platform.SData.IAtomEntryToEntityTransformationService>();
    	
		var entity = BindingSource.Current as Sage.Entity.Interfaces.IUser;

		if (transformer != null && entity != null && entity.Roles.Count == 0)
		{
			foreach (Sage.Integration.Entity.Feeds.UserRoleEntry entry in feed.Entries)
			{
				var item = transformer.ConvertEntry(entry) as Sage.Entity.Interfaces.IUserRole;
				if (item != null)
				{
					item.User = entity;
					entity.Roles.Add(item);
				}
			}
			entity.Persisted -= grdRoles_InsertAssociationAction;
			entity.Save();
		}
	}



}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 var epage = Page as Sage.Platform.WebPortal.EntityPage;
 if (epage != null && epage.IsInsertMode)
 {
     var ent = BindingSource.Current as Sage.Platform.Orm.Interfaces.IPersistentEntity;
     if (ent != null)
     {
         ent.Persisted += grdRoles_InsertAssociationAction;
     }
 }


}

protected override void OnFormBound()
{
 var entity = BindingSource.Current as Sage.Entity.Interfaces.IUser; 
 if (this.PageWorkItem.State["ModeId"].ToString() == "Insert") 
 { 
 var feed = new Sage.Integration.Entity.Feeds.UserRoleFeed(); 
 if (entity != null) 
      if (entity.Roles.Count > 0) 
      { 
			var include = Sage.Common.Syndication.InclusionNode.CreateInclusionTree("Roles", null, null, null); 
          var transformer = 
              Sage.Platform.Application.ApplicationContext.Current.Services.Get 
                  <Sage.Platform.SData.IAtomEntryToEntityTransformationService>(); 
          foreach (Sage.Entity.Interfaces.IUserRole item in entity.Roles) 
          { 
              var transItem = transformer.ConvertEntity(item, include) as Sage.Integration.Entity.Feeds.UserRoleEntry; 
              if (transItem != null) 
              { 
                  feed.Entries.Add(transItem); 
              } 
          } 
          string text; 
          using (var stream = new System.IO.MemoryStream()) 
          { 
          	          	new Sage.Common.Syndication.JsonSerializer().SaveToStream((Sage.Common.Syndication.IFeed)feed, stream, null, include); 
          	text = Encoding.UTF8.GetString(stream.ToArray()); 
          } 
          UserRolesgrdRoles_DataCarrier.Text = text; 
          entity.Roles.Clear(); 
      } 
 } 
if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}

                                var script = new StringBuilder();
                                script.AppendLine("require(['" + Page.ResolveUrl("~/SmartParts/User/UserRoles.js") + "'], function () {");
                                if (Page.IsPostBack)
                                {
                                    script.Append(" Sage.UI.Forms.UserRoles.init({workspace: '" + getMyWorkspace() + "'} );");
                                }
                                else 
                                {
                                    script.AppendLine("require(['dojo/ready'], function(ready) {");
                                    script.Append("ready(function () {Sage.UI.Forms.UserRoles.init({workspace: '" + getMyWorkspace() + "'} ); });");
                                    script.AppendLine("});");//end ready require
                                }

                                script.AppendLine("});");// end require
                                ScriptManager.RegisterStartupScript(this, GetType(), "initialize_UserRoles", script.ToString(), true);


}



public override Sage.Platform.Application.UI.ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
{
    ToolsSmartPartInfo tinfo = new ToolsSmartPartInfo();
        if (BindingSource != null)
    {
        if (BindingSource.Current != null)
        {
            tinfo.Description = BindingSource.Current.ToString();
            tinfo.Title = BindingSource.Current.ToString();
        }
    }
    
    foreach (Control c in Controls)
    {
        SmartPartToolsContainer cont = c as SmartPartToolsContainer;
        if (cont != null)
        {
            switch (cont.ToolbarLocation)
            {
                case SmartPartToolsLocation.Right:
                    foreach (Control tool in cont.Controls)
                    {
                                            tinfo.RightTools.Add(tool);
                                        }
                    break;
                case SmartPartToolsLocation.Center:
                    foreach (Control tool in cont.Controls)
                    {
                        tinfo.CenterTools.Add(tool);
                    }
                    break;
                case SmartPartToolsLocation.Left:
                    foreach (Control tool in cont.Controls)
                    {
                        tinfo.LeftTools.Add(tool);
                    }
                    break;
            }
        }
    }

        return tinfo;
}

private Sage.Platform.Controls.IEntityForm _formAdapter;

public Sage.Platform.Controls.IEntityForm FormAdapter
{
    get { return _formAdapter ?? (_formAdapter = new UserRolesAdapter(this)); }
}

public class UserRolesAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IUserRoles
{
    public UserRolesAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}


}

</script>

<script type="text/javascript">
</script>