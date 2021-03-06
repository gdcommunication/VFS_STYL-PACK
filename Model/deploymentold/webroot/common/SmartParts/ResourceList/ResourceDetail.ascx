<%@ Control Language="C#" ClassName="ResourceDetail" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
         <col width="30%" />
            <col width="30%" />
            <col width="30%" />
     <tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="Name_lbl" AssociatedControlID="Name" runat="server" Text="<%$ resources: Name.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="Name"  dojoType="Sage.UI.Controls.TextBox" MaxLength="64"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="lueCoordinator_lbl" AssociatedControlID="lueCoordinator" runat="server" Text="<%$ resources: lueCoordinator.Caption %>" ></asp:Label>
 </div>   
  <div   class="textcontrol lookup"   >
<SalesLogix:LookupControl runat="server" ID="lueCoordinator"  ToolTip="<%$ resources: lueCoordinator.ToolTip %>" ButtonToolTip="<%$ resources: lueCoordinator.ButtonToolTip %>" LookupEntityName="User" LookupEntityTypeName="Sage.Entity.Interfaces.IUser, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" AutoPostBack="true" TabIndex="5" DialogTitle="<%$ resources: lueCoordinator.LookupDialogTitle %>"  >
<LookupProperties>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueCoordinator.LookupProperties.UserInfo.UserName.PropertyHeader %>" PropertyName="UserInfo.UserName" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueCoordinator.LookupProperties.UserInfo.Phone.PropertyHeader %>" PropertyName="UserInfo.Phone" PropertyType="System.String" PropertyFormat="Phone" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueCoordinator.LookupProperties.UserInfo.Email.PropertyHeader %>" PropertyName="UserInfo.Email" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueCoordinator.LookupProperties.Type.PropertyHeader %>" PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
</LookupProperties>
<LookupPreFilters>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="6"
 ></SalesLogix:LookupPreFilter>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="5"
 ></SalesLogix:LookupPreFilter>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="8"
 ></SalesLogix:LookupPreFilter>
</LookupPreFilters>
</SalesLogix:LookupControl>
  </div>

      </td>
                <td></td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="Type_lbl" AssociatedControlID="Type" runat="server" Text="<%$ resources: Type.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="Type"  dojoType="Sage.UI.Controls.TextBox" MaxLength="64" TabIndex="2"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="txtPhone_lbl" AssociatedControlID="txtPhone" runat="server" Text="<%$ resources: txtPhone.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol phone"  > 
    <SalesLogix:Phone runat="server" ID="txtPhone"
 ToolTip="<%$ resources: txtPhone.ToolTip %>" ReadOnly="true" TabIndex="6"  />
  </div>

      </td>
                <td></td>
      </tr>
<tr>
            <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="cbIsLocation"  Text="<%$ resources: cbIsLocation.Caption %>"  CssClass=""
TabIndex="3" LabelPlacement="left"  />
</div>
      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="txtEmail_lbl" AssociatedControlID="txtEmail" runat="server" Text="<%$ resources: txtEmail.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol"  > 
<SalesLogix:Email runat="server" ID="txtEmail" ReadOnly="true" ButtonToolTip="<%$ resources: txtEmail.ButtonToolTip %>" TabIndex="7" EmailTextBoxStyle-ForeColor="#000099" EmailTextBoxStyle-Font-Underline="false" />
  </div>

      </td>
                <td></td>
      </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtDescription_lbl" AssociatedControlID="txtDescription" runat="server" Text="<%$ resources: txtDescription.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtDescription"  dojoType="Sage.UI.Controls.TextBox" MaxLength="255" TabIndex="4"  />
  </div>

      </td>
                      <td></td>
      </tr>
<tr>
            <td></td>
                <td></td>
                <td></td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="ResourceDetail_RTools" ToolbarLocation="right">
   <SalesLogix:GroupNavigator runat="server" ID="QFSLXGroupNavigator" ></SalesLogix:GroupNavigator>
    <asp:ImageButton runat="server" ID="btnSave"
 ToolTip="<%$ resources: btnSave.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_16x16"  />
   
    <asp:ImageButton runat="server" ID="btnInsertSave"
 ToolTip="<%$ resources: btnInsertSave.ToolTip %>" Visible="false" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_New16x16"  />
   
    <asp:ImageButton runat="server" ID="btnDelete"
 ToolTip="<%$ resources: btnDelete.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Delete_16x16" 
 />
 
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=ResourceDetail&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkResourceDetailHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="ResourceDetail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.IResourceList); }
}

 

protected override void OnAddEntityBindings() {
                 // Name.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding NameTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Name", Name, "Text");
        BindingSource.Bindings.Add(NameTextBinding);
                    // lueCoordinator.LookupResultValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lueCoordinatorLookupResultValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Coordinator", lueCoordinator, "LookupResultValue");
        BindingSource.Bindings.Add(lueCoordinatorLookupResultValueBinding);
                    // Type.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding TypeTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Type", Type, "Text");
        BindingSource.Bindings.Add(TypeTextBinding);
                    // txtPhone.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtPhoneTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Coordinator.UserInfo.Phone", txtPhone, "Text");
        BindingSource.Bindings.Add(txtPhoneTextBinding);
                    // cbIsLocation.Checked Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding cbIsLocationCheckedBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("IsLocation", cbIsLocation, "Checked");
        BindingSource.Bindings.Add(cbIsLocationCheckedBinding);
                    // txtEmail.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtEmailTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Coordinator.UserInfo.Email", txtEmail, "Text");
        BindingSource.Bindings.Add(txtEmailTextBinding);
                    // txtDescription.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtDescriptionTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Description", txtDescription, "Text");
        BindingSource.Bindings.Add(txtDescriptionTextBinding);
    
   
                }
                                                 
protected void lueCoordinator_ChangeAction(object sender, EventArgs e) {
	Sage.Entity.Interfaces.IUser coordinator = lueCoordinator.LookupResultValue as Sage.Entity.Interfaces.IUser;
	if(coordinator != null)
	{
		Sage.Entity.Interfaces.IResourceList _entity = BindingSource.Current as Sage.Entity.Interfaces.IResourceList;
  		if (_entity != null)
  		{
			_entity.Coordinator = coordinator;
		}
	}

}
protected void btnSave_ClickAction(object sender, EventArgs e) {
  Sage.Entity.Interfaces.IResourceList _entity = BindingSource.Current as Sage.Entity.Interfaces.IResourceList;
  if (_entity != null)
  {
    object _parent = GetParentEntity();
    if (DialogService.ChildInsertInfo != null)
    {
        if (_parent != null)
        {
            if (DialogService.ChildInsertInfo.ParentReferenceProperty != null)
            {
                DialogService.ChildInsertInfo.ParentReferenceProperty.SetValue(_entity, _parent, null);
            }
        }
    }
    bool shouldSave = true;
    Sage.Platform.WebPortal.EntityPage page = Page as Sage.Platform.WebPortal.EntityPage;
    if (page != null)
    {
        if(IsInDialog() && page.ModeId.ToUpper() == "INSERT")
        {
            shouldSave = false;
        }
    }

    if(shouldSave)
    {
       _entity.Save();
    }

    if (_parent != null)
    {
        if (DialogService.ChildInsertInfo != null)
        {
           if (DialogService.ChildInsertInfo.ParentsCollectionProperty != null)
           {
              System.Reflection.MethodInfo _add = DialogService.ChildInsertInfo.ParentsCollectionProperty.PropertyType.GetMethod("Add");
              _add.Invoke(DialogService.ChildInsertInfo.ParentsCollectionProperty.GetValue(_parent, null), new object[] { _entity });
           }
        }
     }
  }

          btnSave_ClickActionBRC(sender, e);
    
  
}
protected void btnSave_ClickActionBRC(object sender, EventArgs e) {
      Response.Redirect(string.Format("ResourceList.aspx?entityId={0}", (this.BindingSource.Current as Sage.Platform.ComponentModel.IComponentReference).Id));
  
}
protected void btnInsertSave_ClickAction(object sender, EventArgs e) {
  Sage.Entity.Interfaces.IResourceList _entity = BindingSource.Current as Sage.Entity.Interfaces.IResourceList;
  if (_entity != null)
  {
    object _parent = GetParentEntity();
    if (DialogService.ChildInsertInfo != null)
    {
        if (_parent != null)
        {
            if (DialogService.ChildInsertInfo.ParentReferenceProperty != null)
            {
                DialogService.ChildInsertInfo.ParentReferenceProperty.SetValue(_entity, _parent, null);
            }
        }
    }
    bool shouldSave = true;
    Sage.Platform.WebPortal.EntityPage page = Page as Sage.Platform.WebPortal.EntityPage;
    if (page != null)
    {
        if(IsInDialog() && page.ModeId.ToUpper() == "INSERT")
        {
            shouldSave = false;
        }
    }

    if(shouldSave)
    {
       _entity.Save();
    }

    if (_parent != null)
    {
        if (DialogService.ChildInsertInfo != null)
        {
           if (DialogService.ChildInsertInfo.ParentsCollectionProperty != null)
           {
              System.Reflection.MethodInfo _add = DialogService.ChildInsertInfo.ParentsCollectionProperty.PropertyType.GetMethod("Add");
              _add.Invoke(DialogService.ChildInsertInfo.ParentsCollectionProperty.GetValue(_parent, null), new object[] { _entity });
           }
        }
     }
  }

          btnInsertSave_ClickActionBRC(sender, e);
    
  
}
protected void btnInsertSave_ClickActionBRC(object sender, EventArgs e) {
   Response.Redirect("InsertResource.aspx?modeid=insert");
 
}
protected void btnDelete_ClickAction(object sender, EventArgs e) {
  Sage.Platform.Orm.Interfaces.IPersistentEntity persistentEntity = this.BindingSource.Current as Sage.Platform.Orm.Interfaces.IPersistentEntity;
  if (persistentEntity != null) {
    persistentEntity.Delete();
  }

          btnDelete_ClickActionBRC(sender, e);
    
  
}
protected void btnDelete_ClickActionBRC(object sender, EventArgs e) {
      Response.Redirect("ResourceList.aspx");
  
}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 lueCoordinator.LookupResultValueChanged += new EventHandler(lueCoordinator_ChangeAction);
btnSave.Click += new ImageClickEventHandler(btnSave_ClickAction);
btnInsertSave.Click += new ImageClickEventHandler(btnInsertSave_ClickAction);
btnDelete.Click += new ImageClickEventHandler(btnDelete_ClickAction);


}

protected void quickformload0(object sender, EventArgs e) {
    Sage.Platform.WebPortal.EntityPage page = this.Page as Sage.Platform.WebPortal.EntityPage;
	if (page != null)
	{
        bool bInsertMode = page.ModeId.ToUpper().Equals("INSERT");
        this.btnDelete.Visible = !bInsertMode;
        this.btnInsertSave.Visible = bInsertMode;
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
ClientBindingMgr.RegisterSaveButton(btnSave);

ClientBindingMgr.RegisterSaveButton(btnInsertSave);

btnDelete.OnClientClick = string.Format("return confirm('{0}');", Sage.Platform.WebPortal.PortalUtil.JavaScriptEncode(GetLocalResourceObject("btnDelete.ActionConfirmationMessage").ToString()));

if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}


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
    get { return _formAdapter ?? (_formAdapter = new ResourceDetailAdapter(this)); }
}

public class ResourceDetailAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IResourceDetail
{
    public ResourceDetailAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ITextBoxControl _Name;
    public new  Sage.Platform.Controls.ITextBoxControl Name
    {
        get { return FindControl(ref _Name, "Name"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _Type;
    public  Sage.Platform.Controls.ITextBoxControl Type
    {
        get { return FindControl(ref _Type, "Type"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _cbIsLocation;
    public  Sage.Platform.Controls.ICheckBoxControl cbIsLocation
    {
        get { return FindControl(ref _cbIsLocation, "cbIsLocation"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtDescription;
    public  Sage.Platform.Controls.ITextBoxControl txtDescription
    {
        get { return FindControl(ref _txtDescription, "txtDescription"); }
    }
    private Sage.Platform.Controls.ILookupControl _lueCoordinator;
    public  Sage.Platform.Controls.ILookupControl lueCoordinator
    {
        get { return FindControl(ref _lueCoordinator, "lueCoordinator"); }
    }
    private Sage.Platform.Controls.IPhoneControl _txtPhone;
    public  Sage.Platform.Controls.IPhoneControl txtPhone
    {
        get { return FindControl(ref _txtPhone, "txtPhone"); }
    }
    private Sage.Platform.Controls.IEmailControl _txtEmail;
    public  Sage.Platform.Controls.IEmailControl txtEmail
    {
        get { return FindControl(ref _txtEmail, "txtEmail"); }
    }
    private Sage.Platform.Controls.IGroupNavigatorControl _QFSLXGroupNavigator;
    public  Sage.Platform.Controls.IGroupNavigatorControl QFSLXGroupNavigator
    {
        get { return FindControl(ref _QFSLXGroupNavigator, "QFSLXGroupNavigator"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnSave;
    public  Sage.Platform.Controls.IButtonControl btnSave
    {
        get { return FindControl(ref _btnSave, "btnSave"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnInsertSave;
    public  Sage.Platform.Controls.IButtonControl btnInsertSave
    {
        get { return FindControl(ref _btnInsertSave, "btnInsertSave"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnDelete;
    public  Sage.Platform.Controls.IButtonControl btnDelete
    {
        get { return FindControl(ref _btnDelete, "btnDelete"); }
    }

}

</script>

<script type="text/javascript">
</script>
