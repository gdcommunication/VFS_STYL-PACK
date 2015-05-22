<%@ Control Language="C#" ClassName="UserDetails" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="chkLoginActive"  Text="<%$ resources: chkLoginActive.Caption %>"  CssClass=" checkBoxRight"
LabelPlacement="left"  />
</div>
      </td>
                <td  >
 <asp:Button runat="server" ID="btnChangePassword"
 Text="<%$ resources: btnChangePassword.Caption %>" CssClass="ButtonRight"  />
 
      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="UserName_lbl" AssociatedControlID="UserName" runat="server" Text="<%$ resources: UserName.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="UserName"  dojoType="Sage.UI.Controls.TextBox" MaxLength="30"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="dtpPasswordDate_lbl" AssociatedControlID="dtpPasswordDate" runat="server" Text="<%$ resources: dtpPasswordDate.Caption %>" ></asp:Label>
 </div>
   <div  class="textcontrol datepicker"  >
    <SalesLogix:DateTimePicker runat="server" ID="dtpPasswordDate" DisplayMode="AsText" />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pnName_lbl" AssociatedControlID="pnName" runat="server" Text="<%$ resources: pnName.Caption %>" ></asp:Label>
 </div>
   <div  class="textcontrol"  >
    <SalesLogix:FullName runat="server" ID="pnName" ButtonToolTip="<%$ resources: pnName.ButtonToolTip %>"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtTemplateUsed_lbl" AssociatedControlID="txtTemplateUsed" runat="server" Text="<%$ resources: txtTemplateUsed.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtTemplateUsed" ReadOnly="true"  dojoType="Sage.UI.Controls.TextBox" MaxLength="30"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pklUserTitle_lbl" AssociatedControlID="pklUserTitle" runat="server" Text="<%$ resources: pklUserTitle.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="pklUserTitle" PickListName="Title - UserProfile" MustExistInList="false" MaxLength="32"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pklREegion_lbl" AssociatedControlID="pklREegion" runat="server" Text="<%$ resources: pklREegion.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="pklREegion" PickListName="Region" MustExistInList="false" MaxLength="32"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="QFSLXEmail_lbl" AssociatedControlID="QFSLXEmail" runat="server" Text="<%$ resources: QFSLXEmail.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol"  > 
<SalesLogix:Email runat="server" ID="QFSLXEmail" ButtonToolTip="<%$ resources: QFSLXEmail.ButtonToolTip %>" MaxLength="128" EmailTextBoxStyle-ForeColor="#000099" EmailTextBoxStyle-Font-Underline="false" />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pklDivision_lbl" AssociatedControlID="pklDivision" runat="server" Text="<%$ resources: pklDivision.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="pklDivision" PickListName="Division - UserProfile" MustExistInList="false" MaxLength="32"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="lbxUserType_lbl" AssociatedControlID="lbxUserType" runat="server" Text="<%$ resources: lbxUserType.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol select"  > 
<asp:ListBox runat="server" ID="lbxUserType"  SelectionMode="Single" Rows="1" data-dojo-type="dijit.form.Select"  CssClass="select-control " AutoPostBack="true"  >
<asp:ListItem  Text="<%$ resources: lbxUserType_item0.Text %>"
Value="Network" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item1.Text %>"
Value="Remote" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item2.Text %>"
Value="WebViewer" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item3.Text %>"
Value="Web" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item4.Text %>"
Value="Concurrent" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item5.Text %>"
Value="Retired" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item6.Text %>"
Value="Template" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item7.Text %>"
Value="AddOn" />
<asp:ListItem  Text="<%$ resources: lbxUserType_item8.Text %>"
Value="Admin" />
</asp:ListBox>
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="slxUserManager_lbl" AssociatedControlID="slxUserManager" runat="server" Text="<%$ resources: slxUserManager.Caption %>" ></asp:Label>
 </div>   
  <div   class="textcontrol lookup"   >
<SalesLogix:LookupControl runat="server" ID="slxUserManager" ButtonToolTip="<%$ resources: slxUserManager.ButtonToolTip %>" LookupEntityName="User" LookupEntityTypeName="Sage.Entity.Interfaces.IUser, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" LookupBindingMode="String" AutoPostBack="true"  >
<LookupProperties>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: slxUserManager.LookupProperties.UserInfo.UserName.PropertyHeader %>" PropertyName="UserInfo.UserName" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: slxUserManager.LookupProperties.UserInfo.Title.PropertyHeader %>" PropertyName="UserInfo.Title" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: slxUserManager.LookupProperties.Type.PropertyHeader %>" PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: slxUserManager.LookupProperties.IsManager.PropertyHeader %>" PropertyName="IsManager" PropertyType="System.Boolean" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
</LookupProperties>
<LookupPreFilters>
<SalesLogix:LookupPreFilter PropertyName="IsManager" PropertyType="System.Boolean" OperatorCode="=" Visible="False"
 FilterValue="True"
 ></SalesLogix:LookupPreFilter>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="6"
 ></SalesLogix:LookupPreFilter>
<SalesLogix:LookupPreFilter PropertyName="Type" PropertyType="Sage.Entity.Interfaces.UserType" OperatorCode="!=" Visible="False"
 FilterValue="5"
 ></SalesLogix:LookupPreFilter>
</LookupPreFilters>
</SalesLogix:LookupControl>
  </div>

      </td>
      </tr>
<tr>
            <td  >
<asp:Label runat="server" ID="lblLicenseCount"  CssClass="lblLicMsg"  />

      </td>
                <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="cbxIsUserManager"  Text="<%$ resources: cbxIsUserManager.Caption %>"  CssClass=" CheckBoxRight"
LabelPlacement="left"  />
</div>
      </td>
      </tr>
<tr>
            <td></td>
                <td></td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="UserDetails_RTools" ToolbarLocation="right">
   <SalesLogix:GroupNavigator runat="server" ID="QFSLXGroupNavigator" ></SalesLogix:GroupNavigator>
    <asp:ImageButton runat="server" ID="btnSave"
 AlternateText="<%$ resources: btnSave.Caption %>"  ToolTip="<%$ resources: btnSave.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_16x16"  />
   
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=UserDetails&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkUserDetailsHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="UserDetails" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
                 // chkLoginActive.Checked Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding chkLoginActiveCheckedBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Enabled", chkLoginActive, "Checked");
        BindingSource.Bindings.Add(chkLoginActiveCheckedBinding);
                       // UserName.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding UserNameTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserName", UserName, "Text");
        BindingSource.Bindings.Add(UserNameTextBinding);
                    // dtpPasswordDate.DateTimeValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding dtpPasswordDateDateTimeValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("PasswordChangeDate", dtpPasswordDate, "DateTimeValue");
        BindingSource.Bindings.Add(dtpPasswordDateDateTimeValueBinding);
                    // pnName.NameFirst Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pnNameNameFirstBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.FirstName", pnName, "NameFirst");
        BindingSource.Bindings.Add(pnNameNameFirstBinding);
                 // pnName.NameLast Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pnNameNameLastBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.LastName", pnName, "NameLast");
        pnNameNameLastBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(pnNameNameLastBinding);
                 // pnName.NameMiddle Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pnNameNameMiddleBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.MiddleName", pnName, "NameMiddle");
        pnNameNameMiddleBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(pnNameNameMiddleBinding);
                 // pnName.NamePrefix Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pnNameNamePrefixBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.Prefix", pnName, "NamePrefix");
        pnNameNamePrefixBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(pnNameNamePrefixBinding);
                 // pnName.NameSuffix Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pnNameNameSuffixBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.Suffix", pnName, "NameSuffix");
        pnNameNameSuffixBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(pnNameNameSuffixBinding);
                    // txtTemplateUsed.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtTemplateUsedTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserTemplate", txtTemplateUsed, "Text");
        BindingSource.Bindings.Add(txtTemplateUsedTextBinding);
                    // pklUserTitle.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pklUserTitlePickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.Title", pklUserTitle, "PickListValue");
        BindingSource.Bindings.Add(pklUserTitlePickListValueBinding);
                    // pklREegion.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pklREegionPickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.Region", pklREegion, "PickListValue");
        BindingSource.Bindings.Add(pklREegionPickListValueBinding);
                    // QFSLXEmail.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFSLXEmailTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.Email", QFSLXEmail, "Text");
        BindingSource.Bindings.Add(QFSLXEmailTextBinding);
                    // pklDivision.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pklDivisionPickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserInfo.Division", pklDivision, "PickListValue");
        BindingSource.Bindings.Add(pklDivisionPickListValueBinding);
                    // lbxUserType.SelectedValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lbxUserTypeSelectedValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Type", lbxUserType, "SelectedValue");
        lbxUserTypeSelectedValueBinding.ChangeNotificationEventName = "TextChanged";
        lbxUserTypeSelectedValueBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(lbxUserTypeSelectedValueBinding);
                    // slxUserManager.LookupResultValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding slxUserManagerLookupResultValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ManagerId", slxUserManager, "LookupResultValue");
        BindingSource.Bindings.Add(slxUserManagerLookupResultValueBinding);
                       // cbxIsUserManager.Checked Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding cbxIsUserManagerCheckedBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("IsManager", cbxIsUserManager, "Checked");
        BindingSource.Bindings.Add(cbxIsUserManagerCheckedBinding);
    
   
        }
                                                                                                  
protected void btnChangePassword_ClickAction(object sender, EventArgs e) {
if (DialogService != null) {
  // DialogActionItem
  DialogService.SetSpecs(225, 325, "UserChangePassword", GetLocalResourceObject("2bdc68c4-023e-438c-abf2-a4494281f68a.DialogTitleOverride").ToString() );
    DialogService.EntityType = typeof(Sage.Entity.Interfaces.IUser); 
    DialogService.ShowDialog();
}

}
protected void lbxUserType_ChangeAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.IUser>("User.ResetPassword", objarray);

  
}
protected void slxUserManager_ChangeAction(object sender, EventArgs e) {
Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
if (refresher != null) {
  refresher.RefreshAll();
}
else {  
  Response.Redirect(Request.Url.ToString());
}
}
protected void btnSave_ClickAction(object sender, EventArgs e) {
  Sage.Entity.Interfaces.IUser _entity = BindingSource.Current as Sage.Entity.Interfaces.IUser;
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
    
    Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
    if (refresher != null) {
      refresher.RefreshAll();
    }
    else {  
      Response.Redirect(Request.Url.ToString());
    }

}
protected void btnSave_ClickActionBRC(object sender, EventArgs e) {
Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
if (refresher != null) {
  refresher.RefreshAll();
}
else {  
  Response.Redirect(Request.Url.ToString());
}
}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 btnChangePassword.Click += new EventHandler(btnChangePassword_ClickAction);
lbxUserType.TextChanged += new EventHandler(lbxUserType_ChangeAction);
slxUserManager.LookupResultValueChanged += new EventHandler(slxUserManager_ChangeAction);
btnSave.Click += new ImageClickEventHandler(btnSave_ClickAction);


}

protected void quickformload0(object sender, EventArgs e) {
Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
Object[] methodArgs = new Object[] { FormAdapter, e };
lib.Execute("UserDetails.OnLoad1", methodArgs);

}
protected override void OnFormBound()
{
ClientBindingMgr.RegisterSaveButton(btnSave);

if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
quickformload0(this, EventArgs.Empty);
ClientBindingMgr.SetFocusTo(UserName);


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
    get { return _formAdapter ?? (_formAdapter = new UserDetailsAdapter(this)); }
}

public class UserDetailsAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IUserDetails
{
    public UserDetailsAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ICheckBoxControl _chkLoginActive;
    public  Sage.Platform.Controls.ICheckBoxControl chkLoginActive
    {
        get { return FindControl(ref _chkLoginActive, "chkLoginActive"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _UserName;
    public  Sage.Platform.Controls.ITextBoxControl UserName
    {
        get { return FindControl(ref _UserName, "UserName"); }
    }
    private Sage.Platform.Controls.IPersonNameControl _pnName;
    public  Sage.Platform.Controls.IPersonNameControl pnName
    {
        get { return FindControl(ref _pnName, "pnName"); }
    }
    private Sage.Platform.Controls.IPickListControl _pklUserTitle;
    public  Sage.Platform.Controls.IPickListControl pklUserTitle
    {
        get { return FindControl(ref _pklUserTitle, "pklUserTitle"); }
    }
    private Sage.Platform.Controls.IEmailControl _QFSLXEmail;
    public  Sage.Platform.Controls.IEmailControl QFSLXEmail
    {
        get { return FindControl(ref _QFSLXEmail, "QFSLXEmail"); }
    }
    private Sage.Platform.Controls.IListBoxControl _lbxUserType;
    public  Sage.Platform.Controls.IListBoxControl lbxUserType
    {
        get { return FindControl(ref _lbxUserType, "lbxUserType"); }
    }
    private Sage.Platform.Controls.ILabelControl _lblLicenseCount;
    public  Sage.Platform.Controls.ILabelControl lblLicenseCount
    {
        get { return FindControl(ref _lblLicenseCount, "lblLicenseCount"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnChangePassword;
    public  Sage.Platform.Controls.IButtonControl btnChangePassword
    {
        get { return FindControl(ref _btnChangePassword, "btnChangePassword"); }
    }
    private Sage.Platform.Controls.IDateTimePickerControl _dtpPasswordDate;
    public  Sage.Platform.Controls.IDateTimePickerControl dtpPasswordDate
    {
        get { return FindControl(ref _dtpPasswordDate, "dtpPasswordDate"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtTemplateUsed;
    public  Sage.Platform.Controls.ITextBoxControl txtTemplateUsed
    {
        get { return FindControl(ref _txtTemplateUsed, "txtTemplateUsed"); }
    }
    private Sage.Platform.Controls.IPickListControl _pklREegion;
    public  Sage.Platform.Controls.IPickListControl pklREegion
    {
        get { return FindControl(ref _pklREegion, "pklREegion"); }
    }
    private Sage.Platform.Controls.IPickListControl _pklDivision;
    public  Sage.Platform.Controls.IPickListControl pklDivision
    {
        get { return FindControl(ref _pklDivision, "pklDivision"); }
    }
    private Sage.Platform.Controls.ILookupControl _slxUserManager;
    public  Sage.Platform.Controls.ILookupControl slxUserManager
    {
        get { return FindControl(ref _slxUserManager, "slxUserManager"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _cbxIsUserManager;
    public  Sage.Platform.Controls.ICheckBoxControl cbxIsUserManager
    {
        get { return FindControl(ref _cbxIsUserManager, "cbxIsUserManager"); }
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

    public  void OnLoad1(System.EventArgs e)
    {
        Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
        Object[] methodArgs = new Object[] { this, e };
        lib.Execute("UserDetails.OnLoad1", methodArgs);
    }
}

</script>

<script type="text/javascript">
</script>
