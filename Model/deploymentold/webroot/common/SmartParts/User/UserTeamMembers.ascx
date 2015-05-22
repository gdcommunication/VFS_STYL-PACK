<%@ Control Language="C#" ClassName="UserTeamMembers" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
<%@ Register Assembly="Sage.SalesLogix.Client.GroupBuilder" Namespace="Sage.SalesLogix.Client.GroupBuilder" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.PickList" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.DependencyLookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Lookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Timeline" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.HighLevelTypes" Namespace="Sage.SalesLogix.HighLevelTypes" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.Platform.WebPortal" Namespace="Sage.Platform.WebPortal.SmartParts" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.ScriptResourceProvider" TagPrefix="Saleslogix" %>

<%//------------------------------------------------------------------------
//This file was generated by a tool.  Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//------------------------------------------------------------------------ %>
<table border="0" cellpadding="1" cellspacing="0" class="formtable">
         <col width="100%" />
     <tr>
            <td  >
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

	   

<SalesLogix:ScriptResourceProvider ID="UserTeamMembersgrdTeams_Strings" runat="server">
    <Keys>
          <SalesLogix:ResourceKeyName Key="grdTeams.463701ca-8ff2-43c1-a864-c673dec0100b.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdTeams.d6016bfc-0528-4763-8c5e-891b3981be43.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdTeams.d81642fa-d355-4f94-b430-3d2a517c507d.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdTeams.289c9959-b3a3-4c90-a911-c12882cccecb.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdTeams.ba2d83bf-74cc-4580-b255-e69b2ca9008e.ColumnHeading" />
           <SalesLogix:ResourceKeyName Key="grdTeams.btnRemoveFromTeam.ToolTip" />
     </Keys>
</SalesLogix:ScriptResourceProvider>

					 
  <div id="UserTeamMembersgrdTeams_Container" style="width:100%;height:100%;" class="">
    <div id="UserTeamMembersgrdTeams_Grid" style="width:100%;height:100%;"
     data-dojo-type="dijit.layout.BorderContainer"
></div>
</div>



      </td>
      </tr>
<tr>
            <td  >
<asp:Panel runat="server" ID="QFControlsList" CssClass="controlslist display-none"
>
  <asp:HiddenField ID="DefaultOwnerId" Value="" runat="server" />

</asp:Panel>
      </td>
      </tr>
</table>
 

 <SalesLogix:SmartPartToolsContainer runat="server" ID="UserTeamMembers_LTools" ToolbarLocation="left">
    <div class="slxlabel"><asp:Label runat="server" ID="QFLabel" Text="<%$ resources: QFLabel.Text %>"  ToolTip="<%$ resources: QFLabel.ToolTip %>"  />
</div>
  </SalesLogix:SmartPartToolsContainer>

 <SalesLogix:SmartPartToolsContainer runat="server" ID="UserTeamMembers_RTools" ToolbarLocation="right">
   <SalesLogix:LookupControl runat="server" ID="lueAddUser" ButtonToolTip="<%$ resources: lueAddUser.ButtonToolTip %>" LookupEntityName="User" LookupEntityTypeName="Sage.Entity.Interfaces.IUser, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" LookupDisplayMode="ButtonOnly" AutoPostBack="true" AddEmptyListItem="false" DialogTitle="<%$ resources: lueAddUser.LookupDialogTitle %>" LookupImageURL="~/ImageResource.axd?scope=global&type=Global_Images&key=plus_16x16"  >
<LookupProperties>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueAddUser.LookupProperties.UserInfo.UserName.PropertyHeader %>" PropertyName="UserInfo.UserName" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueAddUser.LookupProperties.UserInfo.Title.PropertyHeader %>" PropertyName="UserInfo.Title" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueAddUser.LookupProperties.UserInfo.Department.PropertyHeader %>" PropertyName="UserInfo.Department" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueAddUser.LookupProperties.UserInfo.Region.PropertyHeader %>" PropertyName="UserInfo.Region" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueAddUser.LookupProperties.Type.PropertyHeader %>" PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
</LookupProperties>
<LookupPreFilters>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="6"
 ></SalesLogix:LookupPreFilter>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="8"
 ></SalesLogix:LookupPreFilter>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="5"
 ></SalesLogix:LookupPreFilter>
</LookupPreFilters>
</SalesLogix:LookupControl>
 

  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=UserTeamMembers&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkUserTeamMembersHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="UserTeamMembers" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
 </SalesLogix:SmartPartToolsContainer>

<SalesLogix:ScriptResourceProvider ID="UserTeamMembersResources" runat="server">
<Keys>
			<SalesLogix:ResourceKeyName Key="ConfirmRemoveFromTeam" />
	</Keys>
</SalesLogix:ScriptResourceProvider>


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

 private Sage.Platform.WebPortal.Binding.WebEntityListBindingSource _dsOwnerJoins;
public Sage.Platform.WebPortal.Binding.WebEntityListBindingSource dsOwnerJoins
{ 
  get 
  {
    if (_dsOwnerJoins == null)
    {
             _dsOwnerJoins = new Sage.Platform.WebPortal.Binding.WebEntityListBindingSource(typeof(Sage.Entity.Interfaces.IOwnerJoin), 
	    EntityType                     ,"GetUserTeamMembers", System.Reflection.MemberTypes.Method);
            	   	}
 	return _dsOwnerJoins;
  }
}

void dsOwnerJoins_OnCurrentEntitySet(object sender, EventArgs e) 
{
      if (Visible)
    { 
		if(BindingSource.Current != null)
		{
		
      
        dsOwnerJoins.SourceObject = BindingSource.Current;
   		}
    }
   if (Visible)
   {   
      RegisterBindingsWithClient(dsOwnerJoins);
   }
}

 



 

protected override void OnAddEntityBindings() {
                       // DefaultOwnerId.Value Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding DefaultOwnerIdValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("DefaultOwner.Id", DefaultOwnerId, "Value");
        BindingSource.Bindings.Add(DefaultOwnerIdValueBinding);
    
     BindingSource.OnCurrentEntitySet += new EventHandler(dsOwnerJoins_OnCurrentEntitySet);
    
           }
                     
protected void lueAddUser_ChangeAction(object sender, EventArgs e) {
Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
Object[] methodArgs = new Object[] { FormAdapter, e };
lib.Execute("UserTeamMembers.lueAddUser_OnChange", methodArgs);

}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 lueAddUser.LookupResultValueChanged += new EventHandler(lueAddUser_ChangeAction);


}

protected override void OnFormBound()
{
ScriptManager.RegisterStartupScript(Page, GetType(), "cleanupcontainer", "jQuery(\".controlslist > div:empty\").remove();", true);
ClientBindingMgr.RegisterBoundControl(lueAddUser);

if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
if (dsOwnerJoins.SourceObject == null) { dsOwnerJoins.SourceObject = BindingSource.Current; }
if (dsOwnerJoins.SourceObject == null) { RegisterBindingsWithClient(dsOwnerJoins); }
dsOwnerJoins.Bind();


                                var script = new StringBuilder();
                                script.AppendLine("require(['" + Page.ResolveUrl("~/SmartParts/User/UserTeamMembers.js") + "'], function () {");
                                if (Page.IsPostBack)
                                {
                                    script.Append(" Sage.UI.Forms.UserTeamMembers.init({workspace: '" + getMyWorkspace() + "'} );");
                                }
                                else 
                                {
                                    script.AppendLine("require(['dojo/ready'], function(ready) {");
                                    script.Append("ready(function () {Sage.UI.Forms.UserTeamMembers.init({workspace: '" + getMyWorkspace() + "'} ); });");
                                    script.AppendLine("});");//end ready require
                                }

                                script.AppendLine("});");// end require
                                ScriptManager.RegisterStartupScript(this, GetType(), "initialize_UserTeamMembers", script.ToString(), true);


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
    get { return _formAdapter ?? (_formAdapter = new UserTeamMembersAdapter(this)); }
}

public class UserTeamMembersAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IUserTeamMembers
{
    public UserTeamMembersAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IControlsListControl _QFControlsList;
    public  Sage.Platform.Controls.IControlsListControl QFControlsList
    {
        get { return FindControl(ref _QFControlsList, "QFControlsList"); }
    }
    private Sage.Platform.Controls.IHiddenControl _DefaultOwnerId;
    public  Sage.Platform.Controls.IHiddenControl DefaultOwnerId
    {
        get { return FindControl(ref _DefaultOwnerId, "DefaultOwnerId"); }
    }
    private Sage.Platform.Controls.IDataSourceControl _dsOwnerJoins;
    public  Sage.Platform.Controls.IDataSourceControl dsOwnerJoins
    {
        get { return FindControl(ref _dsOwnerJoins, "dsOwnerJoins"); }
    }
    private Sage.Platform.Controls.ILabelControl _QFLabel;
    public  Sage.Platform.Controls.ILabelControl QFLabel
    {
        get { return FindControl(ref _QFLabel, "QFLabel"); }
    }
    private Sage.Platform.Controls.ILookupControl _lueAddUser;
    public  Sage.Platform.Controls.ILookupControl lueAddUser
    {
        get { return FindControl(ref _lueAddUser, "lueAddUser"); }
    }

    public  void lueAddUser_OnChange(System.EventArgs e)
    {
        Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
        Object[] methodArgs = new Object[] { this, e };
        lib.Execute("UserTeamMembers.lueAddUser_OnChange", methodArgs);
    }
}

</script>

<script type="text/javascript">
</script>
