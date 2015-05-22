<%@ Control Language="C#" ClassName="IntegrationLinks" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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

	  	   

<SalesLogix:ScriptResourceProvider ID="IntegrationLinksgrdLinks_Strings" runat="server">
    <Keys>
          <SalesLogix:ResourceKeyName Key="grdLinks.cda051d5-d4dc-4bb2-924a-ea2df29888c0.ColumnHeading" />
        <SalesLogix:ResourceKeyName Key="grdLinks.cda051d5-d4dc-4bb2-924a-ea2df29888c0.Text" />
<SalesLogix:ResourceKeyName Key="afede43f-5ad7-44c9-9532-cc1bbd79038d.DialogTitleOverride" />   <SalesLogix:ResourceKeyName Key="grdLinks.ec7179d9-f6ea-4c31-9e21-df2ae6d282de.ColumnHeading" />
        <SalesLogix:ResourceKeyName Key="grdLinks.ec7179d9-f6ea-4c31-9e21-df2ae6d282de.Text" />
<SalesLogix:ResourceKeyName Key="8197f088-249b-4acc-9cfa-df95788bf686.DialogTitleOverride" />   <SalesLogix:ResourceKeyName Key="grdLinks.8611b626-1549-441d-a831-ff73ab1027be.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdLinks.f3a490d0-b497-4f70-b0d7-08b6127916e9.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdLinks.da8216b3-8d02-41ef-a729-bed51d4dbdd5.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdLinks.07081f40-bdf3-42df-b974-39b355062663.ColumnHeading" />
           <SalesLogix:ResourceKeyName Key="grdLinks.Save.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdLinks.Cancel.ToolTip" />
     </Keys>
</SalesLogix:ScriptResourceProvider>

						 
  <div id="IntegrationLinksgrdLinks_Container" style="width:100%;height:100%;" class="">
    <div id="IntegrationLinksgrdLinks_Grid" style="width:100%;height:100%;"
     data-dojo-type="dijit.layout.BorderContainer"
></div>
</div>


 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="IntegrationLinks_RTools" ToolbarLocation="right">
    <asp:ImageButton runat="server" ID="btnAdd"
 AlternateText="<%$ resources: btnAdd.Caption %>"  ToolTip="<%$ resources: btnAdd.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=plus_16x16"  />
 
    <asp:ImageButton runat="server" ID="btnAuthorize"
 AlternateText="<%$ resources: btnAuthorize.Caption %>"  ToolTip="<%$ resources: btnAuthorize.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=plus_16x16"  />
 
    <asp:ImageButton runat="server" ID="btnSyncNow"
 AlternateText="<%$ resources: btnSyncNow.Caption %>"  ToolTip="<%$ resources: btnSyncNow.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=sync_all_16x16" 
 />
 
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=IntegrationLinks&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkIntegrationLinksHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="IntegrationLinks" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.IIntegration); }
}

 

protected override void OnAddEntityBindings() {
    
   
         
      
      
      
             
      
      
      
        }
       
protected void btnAdd_ClickAction(object sender, EventArgs e) {
if (DialogService != null) {
  // DialogActionItem
  DialogService.SetSpecs(400, 600, "AddEditLink", GetLocalResourceObject("2f41b7dc-517d-4878-86f9-22dbca968200.DialogTitleOverride").ToString() );
    DialogService.EntityType = typeof(Sage.Entity.Interfaces.IAppIdMapping); 
    DialogService.ShowDialog();
}

}
protected void btnAuthorize_ClickAction(object sender, EventArgs e) {
if (DialogService != null) {
  // DialogActionItem
  DialogService.SetSpecs(200, 600, "AuthorizeService", GetLocalResourceObject("36a1cde4-6fee-4b03-9c00-f9df34419070.DialogTitleOverride").ToString() );
    DialogService.EntityType = typeof(Sage.Entity.Interfaces.IUserOAuthToken); 
    DialogService.ShowDialog();
}

}
protected void btnSyncNow_ClickAction(object sender, EventArgs e) {
Sage.SalesLogix.AppIdMapping.Rules.ExecuteSyncAll(null);

}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 if (RoleSecurityService != null)
{
if (RoleSecurityService.HasAccess("ENTITIES/INTEGRATIONLINK/ADD"))
{
btnAdd.Click += new ImageClickEventHandler(btnAdd_ClickAction);
}
}
if (RoleSecurityService != null)
{
if (RoleSecurityService.HasAccess("ENTITIES/AUTHENTICATIONPROVIDER/ADD"))
{
btnAuthorize.Click += new ImageClickEventHandler(btnAuthorize_ClickAction);
}
}
btnSyncNow.Click += new ImageClickEventHandler(btnSyncNow_ClickAction);


}

protected void quickformload0(object sender, EventArgs e) {
Sage.Entity.Interfaces.IIntegration integration = BindingSource.Current as Sage.Entity.Interfaces.IIntegration;
if (integration != null)
{
    var userService = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Security.IUserService>();

    //determines whether or not we want to display the Authorize Services button in the toolbar. If they have already authorized this provider then we don't want to show it.
    bool authorized = false;
    if (integration.OAuthProvider != null)
        foreach (var userOAuthToken in integration.OAuthProvider.UserOAuthTokens.Where(userOAuthToken => userService.UserId.Trim() == userOAuthToken.User.Id.ToString()))
        {
            authorized = true;
        }

    btnAdd.Visible = integration.AuthorizationType == "Basic";
    btnAuthorize.Visible = !authorized && (integration.AuthorizationType == "OAuth1" || integration.AuthorizationType == "OAuth2" && integration.LinkType == "Admin");

    var clientContextService = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.ClientContextService>();
    if (clientContextService != null)
    {
        if (clientContextService.CurrentContext.ContainsKey("IntegrationAuthType"))
        {
            clientContextService.CurrentContext["IntegrationAuthType"] = integration.AuthorizationType;
        }
        else
        {
            clientContextService.CurrentContext.Add("IntegrationAuthType", integration.AuthorizationType);
        }
		if (clientContextService.CurrentContext.ContainsKey("IntegrationLinkType"))
        {
            clientContextService.CurrentContext["IntegrationLinkType"] = integration.LinkType;
        }
        else
        {
            clientContextService.CurrentContext.Add("IntegrationLinkType", integration.LinkType);
        }
    }
}

}
private bool _runActivating;
protected override void OnActivating()
{
_runActivating = true;
}
private void DoActivating()
{
quickformload0(this, EventArgs.Empty);

}
protected override void OnFormBound()
{
Sage.Platform.WebPortal.EntityPage epage = Page as Sage.Platform.WebPortal.EntityPage;
        if (epage != null)
            _runActivating = (epage.IsNewEntity || _runActivating);
if (_runActivating) DoActivating();
btnSyncNow.OnClientClick = string.Format("return confirm('{0}');", Sage.Platform.WebPortal.PortalUtil.JavaScriptEncode(GetLocalResourceObject("btnSyncNow.ActionConfirmationMessage").ToString()));

if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
if (!RoleSecurityService.HasAccess("ENTITIES/INTEGRATIONLINK/ADD"))
{
btnAdd.Visible = false;
}
if (!RoleSecurityService.HasAccess("ENTITIES/AUTHENTICATIONPROVIDER/ADD"))
{
btnAuthorize.Visible = false;
}

                                var script = new StringBuilder();
                                script.AppendLine("require(['" + Page.ResolveUrl("~/SmartParts/Integration/IntegrationLinks.js") + "'], function () {");
                                if (Page.IsPostBack)
                                {
                                    script.Append(" Sage.UI.Forms.IntegrationLinks.init({workspace: '" + getMyWorkspace() + "'} );");
                                }
                                else 
                                {
                                    script.AppendLine("require(['dojo/ready'], function(ready) {");
                                    script.Append("ready(function () {Sage.UI.Forms.IntegrationLinks.init({workspace: '" + getMyWorkspace() + "'} ); });");
                                    script.AppendLine("});");//end ready require
                                }

                                script.AppendLine("});");// end require
                                ScriptManager.RegisterStartupScript(this, GetType(), "initialize_IntegrationLinks", script.ToString(), true);


}



public override Sage.Platform.Application.UI.ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
{
    ToolsSmartPartInfo tinfo = new ToolsSmartPartInfo();
    
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
    get { return _formAdapter ?? (_formAdapter = new IntegrationLinksAdapter(this)); }
}

public class IntegrationLinksAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IIntegrationLinks
{
    public IntegrationLinksAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IButtonControl _btnAdd;
    public  Sage.Platform.Controls.IButtonControl btnAdd
    {
        get { return FindControl(ref _btnAdd, "btnAdd"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnAuthorize;
    public  Sage.Platform.Controls.IButtonControl btnAuthorize
    {
        get { return FindControl(ref _btnAuthorize, "btnAuthorize"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnSyncNow;
    public  Sage.Platform.Controls.IButtonControl btnSyncNow
    {
        get { return FindControl(ref _btnSyncNow, "btnSyncNow"); }
    }

}

</script>

<script type="text/javascript">
</script>