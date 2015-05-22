<%@ Control Language="C#" ClassName="SyncHistory" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
<table border="0" cellpadding="1" cellspacing="0" class="formtable">
         <col width="50%" />
            <col width="50%" />
     <tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="usrUser_lbl" AssociatedControlID="usrUser" runat="server" Text="<%$ resources: usrUser.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol"  > 
    <SalesLogix:SlxUserControl runat="server" ID="usrUser" ButtonToolTip="<%$ resources: usrUser.ButtonToolTip %>"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="cboResource_lbl" AssociatedControlID="cboResource" runat="server" Text="<%$ resources: cboResource.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol select"  > 
<asp:ListBox runat="server" ID="cboResource"  SelectionMode="Single" Rows="1" data-dojo-type="dijit.form.Select"  CssClass="select-control "  >
</asp:ListBox>
  </div>

      </td>
      </tr>
<tr>
            <td  colspan="2" >
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

 

<SalesLogix:ScriptResourceProvider ID="SyncHistorygrdSyncHistory_Strings" runat="server">
    <Keys>
          <SalesLogix:ResourceKeyName Key="grdSyncHistory.d7d40e19-0f70-4fab-9707-52e02c18dfd3.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.46f1ed4c-739b-4779-911d-9f4405d2cb7d.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.18d63b98-17ae-4516-8d4e-532ba6b2c845.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.f3320432-30a4-4b53-8eeb-9c0ec3a0cbc1.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.ff0ba147-6d52-4109-819a-c76588a071e7.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.cdfb348f-d6b8-4812-9de4-cb8e8ed5f9f9.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.36de09c3-4aa6-43d9-90d7-c9058c59e655.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.e5481099-93e7-47bf-a395-6084280e2f41.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.933921af-b23b-4fa4-a3f3-cd29b5ed4da5.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.d45b3e9a-677d-4425-b274-4a80e8ce6050.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdSyncHistory.df4c721d-d55a-44e6-ab85-0043fc6bca56.ColumnHeading" />
            </Keys>
</SalesLogix:ScriptResourceProvider>

											 
  <div id="SyncHistorygrdSyncHistory_Container" style="width:100%;height:100%;" class="">
    <div id="SyncHistorygrdSyncHistory_Grid" style="width:100%;height:100%;"
     data-dojo-type="dijit.layout.BorderContainer"
></div>
</div>



      </td>
            </tr>
</table>
 
   <asp:HiddenField ID="txtFilterUserId" Value="" runat="server" />

 

 <SalesLogix:SmartPartToolsContainer runat="server" ID="SyncHistory_RTools" ToolbarLocation="right">
    <asp:ImageButton runat="server" ID="btnRefresh"
 AlternateText="<%$ resources: btnRefresh.Caption %>"  ToolTip="<%$ resources: btnRefresh.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=refresh"  />
 
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=SyncHistory&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkSyncHistoryHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="SyncHistory" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.ISyncJob); }
}

 

protected override void OnAddEntityBindings() {
          
   
    }
                     
protected void btnRefresh_ClickAction(object sender, EventArgs e) {
if (usrUser.LookupResultValue != null)
{
    Sage.Entity.Interfaces.IUser user = usrUser.LookupResultValue as Sage.Entity.Interfaces.IUser;
    txtFilterUserId.Value = user.Id.ToString();
}

}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 btnRefresh.Click += new ImageClickEventHandler(btnRefresh_ClickAction);


}

protected void quickformload0(object sender, EventArgs e) {
if (cboResource.Items.Count == 0)
{
    Dictionary<string, string> resources = Sage.SalesLogix.BusinessRules.BusinessRuleHelper.GetResourceKindList();
    cboResource.Items.Add(new ListItem(string.Empty, string.Empty) { Selected = true });
    foreach (var resource in resources)
    {
        cboResource.Items.Add(new ListItem(resource.Value, resource.Key));
    }
}
if (!String.IsNullOrEmpty(txtFilterUserId.Value))
{
    usrUser.LookupResultValue = Sage.Platform.EntityFactory.GetById<Sage.Entity.Interfaces.IUser>(txtFilterUserId.Value);
}
var clientContextService = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.ClientContextService>();
if (clientContextService != null)
{
    if (clientContextService.CurrentContext.ContainsKey("SyncHistoryFilterByUser"))
    {
        clientContextService.CurrentContext["SyncHistoryFilterByUser"] = txtFilterUserId.Value;
    }
    else
    {
        clientContextService.CurrentContext.Add("SyncHistoryFilterByUser", txtFilterUserId.Value);
    }

    if (clientContextService.CurrentContext.ContainsKey("SyncHistoryFilterByResource"))
    {
        clientContextService.CurrentContext["SyncHistoryFilterByResource"] = cboResource.Text;
    }
    else
    {
        clientContextService.CurrentContext.Add("SyncHistoryFilterByResource", cboResource.Text);
    }
}

}
protected override void OnFormBound()
{
if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}

                                var script = new StringBuilder();
                                script.AppendLine("require(['" + Page.ResolveUrl("~/SmartParts/SyncJob/SyncHistory.js") + "'], function () {");
                                if (Page.IsPostBack)
                                {
                                    script.Append(" Sage.UI.Forms.SyncHistory.init({workspace: '" + getMyWorkspace() + "'} );");
                                }
                                else 
                                {
                                    script.AppendLine("require(['dojo/ready'], function(ready) {");
                                    script.Append("ready(function () {Sage.UI.Forms.SyncHistory.init({workspace: '" + getMyWorkspace() + "'} ); });");
                                    script.AppendLine("});");//end ready require
                                }

                                script.AppendLine("});");// end require
                                ScriptManager.RegisterStartupScript(this, GetType(), "initialize_SyncHistory", script.ToString(), true);
quickformload0(this, EventArgs.Empty);


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
    get { return _formAdapter ?? (_formAdapter = new SyncHistoryAdapter(this)); }
}

public class SyncHistoryAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.ISyncHistory
{
    public SyncHistoryAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IUserControl _usrUser;
    public  Sage.Platform.Controls.IUserControl usrUser
    {
        get { return FindControl(ref _usrUser, "usrUser"); }
    }
    private Sage.Platform.Controls.IListBoxControl _cboResource;
    public  Sage.Platform.Controls.IListBoxControl cboResource
    {
        get { return FindControl(ref _cboResource, "cboResource"); }
    }
    private Sage.Platform.Controls.IHiddenControl _txtFilterUserId;
    public  Sage.Platform.Controls.IHiddenControl txtFilterUserId
    {
        get { return FindControl(ref _txtFilterUserId, "txtFilterUserId"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnRefresh;
    public  Sage.Platform.Controls.IButtonControl btnRefresh
    {
        get { return FindControl(ref _btnRefresh, "btnRefresh"); }
    }

}

</script>

<script type="text/javascript">
</script>
