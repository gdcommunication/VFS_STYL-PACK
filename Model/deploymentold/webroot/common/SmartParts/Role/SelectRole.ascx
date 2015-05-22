<%@ Control Language="C#" ClassName="SelectRole" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
         <col width="100%" />
     <tr>
            <td  >
 <div class="slxlabel"><asp:Label runat="server" ID="lblHeader" Text="<%$ resources: lblHeader.Text %>"  />
</div>
      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="lueRole_lbl" AssociatedControlID="lueRole" runat="server" Text="<%$ resources: lueRole.Caption %>" ></asp:Label>
 </div>   
  <div   class="textcontrol lookup"   >
<SalesLogix:LookupControl runat="server" ID="lueRole" ButtonToolTip="<%$ resources: lueRole.ButtonToolTip %>" LookupEntityName="Role" LookupEntityTypeName="Sage.Entity.Interfaces.IRole, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" InitializeLookup="true" AutoPostBack="true"  >
<LookupProperties>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueRole.LookupProperties.RoleName.PropertyHeader %>" PropertyName="RoleName" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueRole.LookupProperties.RoleDescription.PropertyHeader %>" PropertyName="RoleDescription" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
</LookupProperties>
<LookupPreFilters>
</LookupPreFilters>
</SalesLogix:LookupControl>
  </div>
 

      </td>
      </tr>
<tr>
            <td  >
<asp:Panel runat="server" ID="QFControlsList" CssClass="controlslist qfActionContainer"
>
   <asp:Button runat="server" ID="btnOk"
 Text="<%$ resources: btnOk.Caption %>"  ToolTip="<%$ resources: btnOk.ToolTip %>" CssClass="slxbutton"  />
 
   <asp:Button runat="server" ID="btnCancel"
 Text="<%$ resources: btnCancel.Caption %>"  ToolTip="<%$ resources: btnCancel.ToolTip %>" CssClass="slxbutton"  />
 
</asp:Panel>
      </td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="SelectRole_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=SelectRole&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkSelectRoleHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="SelectRole" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.IRole); }
}

 

protected override void OnAddEntityBindings() {
                
   
}
                                   
protected void lueRole_ChangeAction(object sender, EventArgs e) {
Button btnOk = this.FindControl("btnOk") as Button;
btnOk.Enabled = this.lueRole.LookupResultValue != null;

}
protected void btnOk_ClickAction(object sender, EventArgs e) {
    Type targetEntityType = DialogService.DialogParameters["targetEntityType"] as Type;
    Sage.Entity.Interfaces.IRole role = lueRole.LookupResultValue as Sage.Entity.Interfaces.IRole;
    System.Collections.Generic.IList<string> ids = DialogService.DialogParameters["selectedIds"] as System.Collections.Generic.IList<string>;

    if(targetEntityType.IsAssignableFrom(typeof (Sage.Entity.Interfaces.IUser)))
    {
        role.AddUsers(ids);
    }
    else if(targetEntityType.IsAssignableFrom(typeof (Sage.Entity.Interfaces.ISecuredAction)))
    {
        role.AddSecuredActions(ids);
    }
    
   DialogService.CloseEventHappened(this, null);
	
   Response.Redirect(string.Format("Role.aspx?entityid={0}", role.Id));

}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 lueRole.LookupResultValueChanged += new EventHandler(lueRole_ChangeAction);
btnOk.Click += new EventHandler(btnOk_ClickAction);
btnOk.Click += new EventHandler(DialogService.CloseEventHappened);
btnOk.Click += new EventHandler(Refresh);
btnCancel.Click += new EventHandler(DialogService.CloseEventHappened);


}

protected void quickformload0(object sender, EventArgs e) {
Button btnOk = this.FindControl("btnOk") as Button;
btnOk.Enabled = false;
	
this.lueRole.Text="";
this.lueRole.LookupResultValue = null;

System.Collections.Generic.IList<string> ids = DialogService.DialogParameters["selectedIds"] as System.Collections.Generic.IList<string>;
Type targetEntityType = DialogService.DialogParameters["targetEntityType"] as Type;

Label headerLabel = this.FindControl("lblHeader") as Label;
string entityName = targetEntityType.Name.StartsWith("I") ? targetEntityType.Name.Substring(1) : targetEntityType.Name;
if(entityName.Contains("User")) 
	entityName="user";
else
	entityName="secured action";

headerLabel.Text = string.Format(GetLocalResourceObject("lblHeader.Text").ToString(), ids.Count, entityName);

this.lueRole.InitializeLookup = true;

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
ClientBindingMgr.RegisterBoundControl(lueRole);

ScriptManager.RegisterStartupScript(Page, GetType(), "cleanupcontainer", "jQuery(\".controlslist > div:empty\").remove();", true);
if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
ClientBindingMgr.RegisterDialogCancelButton(btnCancel);


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
    get { return _formAdapter ?? (_formAdapter = new SelectRoleAdapter(this)); }
}

public class SelectRoleAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.ISelectRole
{
    public SelectRoleAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ILabelControl _lblHeader;
    public  Sage.Platform.Controls.ILabelControl lblHeader
    {
        get { return FindControl(ref _lblHeader, "lblHeader"); }
    }
    private Sage.Platform.Controls.ILookupControl _lueRole;
    public  Sage.Platform.Controls.ILookupControl lueRole
    {
        get { return FindControl(ref _lueRole, "lueRole"); }
    }
    private Sage.Platform.Controls.IControlsListControl _QFControlsList;
    public  Sage.Platform.Controls.IControlsListControl QFControlsList
    {
        get { return FindControl(ref _QFControlsList, "QFControlsList"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnOk;
    public  Sage.Platform.Controls.IButtonControl btnOk
    {
        get { return FindControl(ref _btnOk, "btnOk"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnCancel;
    public  Sage.Platform.Controls.IButtonControl btnCancel
    {
        get { return FindControl(ref _btnCancel, "btnCancel"); }
    }

}

</script>

<script type="text/javascript">
</script>