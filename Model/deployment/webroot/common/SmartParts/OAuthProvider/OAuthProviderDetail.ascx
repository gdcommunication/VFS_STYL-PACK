<%@ Control Language="C#" ClassName="OAuthProviderDetail" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
 <div class=" lbl alignleft" >
   <asp:Label ID="txtProviderKey_lbl" AssociatedControlID="txtProviderKey" runat="server" Text="<%$ resources: txtProviderKey.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtProviderKey" ReadOnly="true"  dojoType="Sage.UI.Controls.TextBox" MaxLength="10"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtProviderName_lbl" AssociatedControlID="txtProviderName" runat="server" Text="<%$ resources: txtProviderName.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtProviderName" Required="true"  dojoType="Sage.UI.Controls.TextBox" MaxLength="32"  />
  </div>

      </td>
      </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtEndPointURL_lbl" AssociatedControlID="txtEndPointURL" runat="server" Text="<%$ resources: txtEndPointURL.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtEndPointURL"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
  <hr />
 

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtSecret_lbl" AssociatedControlID="txtSecret" runat="server" Text="<%$ resources: txtSecret.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtSecret"  dojoType="Sage.UI.Controls.TextBox" MaxLength="128"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtClientId_lbl" AssociatedControlID="txtClientId" runat="server" Text="<%$ resources: txtClientId.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtClientId"  dojoType="Sage.UI.Controls.TextBox" MaxLength="128"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft">
   <asp:Label ID="txtHost_lbl" AssociatedControlID="txtHost" runat="server" Text="<%$ resources: txtHost.Caption %>" ></asp:Label>
 </div>   
   <div  class="twocoltextcontrol"  > 
    <SalesLogix:URL runat="server" ID="txtHost" MaxLength="64" URLTextBoxStyle-ForeColor="#000099" URLTextBoxStyle-Font-Underline="false" />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtApprovalUrl_lbl" AssociatedControlID="txtApprovalUrl" runat="server" Text="<%$ resources: txtApprovalUrl.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtApprovalUrl"  dojoType="Sage.UI.Controls.TextBox" MaxLength="64"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtApprovalData_lbl" AssociatedControlID="txtApprovalData" runat="server" Text="<%$ resources: txtApprovalData.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtApprovalData"  dojoType="Sage.UI.Controls.TextBox" MaxLength="256"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
  <hr />
 

      </td>
            </tr>
<tr>
            <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="chkRequiresRefresh"  Text="<%$ resources: chkRequiresRefresh.Caption %>"  CssClass=""
LabelPlacement="left"  />
</div>
      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtRefreshMethod_lbl" AssociatedControlID="txtRefreshMethod" runat="server" Text="<%$ resources: txtRefreshMethod.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtRefreshMethod"  dojoType="Sage.UI.Controls.TextBox" MaxLength="10"  />
  </div>

      </td>
      </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtRefreshUrl_lbl" AssociatedControlID="txtRefreshUrl" runat="server" Text="<%$ resources: txtRefreshUrl.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtRefreshUrl"  dojoType="Sage.UI.Controls.TextBox" MaxLength="64"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtRefreshData_lbl" AssociatedControlID="txtRefreshData" runat="server" Text="<%$ resources: txtRefreshData.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtRefreshData"  dojoType="Sage.UI.Controls.TextBox" MaxLength="256"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
  <hr />
 

      </td>
            </tr>
<tr>
            <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="chkRequiresAccess"  Text="<%$ resources: chkRequiresAccess.Caption %>"  CssClass=""
LabelPlacement="left"  />
</div>
      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtAccessMethod_lbl" AssociatedControlID="txtAccessMethod" runat="server" Text="<%$ resources: txtAccessMethod.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtAccessMethod"  dojoType="Sage.UI.Controls.TextBox" MaxLength="10"  />
  </div>

      </td>
      </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtAccessUrl_lbl" AssociatedControlID="txtAccessUrl" runat="server" Text="<%$ resources: txtAccessUrl.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtAccessUrl"  dojoType="Sage.UI.Controls.TextBox" MaxLength="64"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="txtAccessData_lbl" AssociatedControlID="txtAccessData" runat="server" Text="<%$ resources: txtAccessData.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="txtAccessData"  dojoType="Sage.UI.Controls.TextBox" MaxLength="256"  />
  </div>

      </td>
            </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="OAuthProviderDetail_RTools" ToolbarLocation="right">
   <SalesLogix:GroupNavigator runat="server" ID="QFSLXGroupNavigator" ></SalesLogix:GroupNavigator>
    <asp:ImageButton runat="server" ID="btnSave"
 ToolTip="<%$ resources: btnSave.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_16x16"  />
   
    <asp:ImageButton runat="server" ID="btnDelete"
 ToolTip="<%$ resources: btnDelete.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Delete_16x16"  />
 
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=OAuthProviderDetail&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkOAuthProviderDetailHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="OAuthProviderDetail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.IOAuthProvider); }
}

 

protected override void OnAddEntityBindings() {
                 // txtProviderKey.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtProviderKeyTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ProviderKey", txtProviderKey, "Text");
        BindingSource.Bindings.Add(txtProviderKeyTextBinding);
                    // txtProviderName.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtProviderNameTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ProviderName", txtProviderName, "Text");
        BindingSource.Bindings.Add(txtProviderNameTextBinding);
                    // txtEndPointURL.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtEndPointURLTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("EndPointURL", txtEndPointURL, "Text");
        BindingSource.Bindings.Add(txtEndPointURLTextBinding);
                       // txtSecret.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtSecretTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Secret", txtSecret, "Text");
        BindingSource.Bindings.Add(txtSecretTextBinding);
                    // txtClientId.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtClientIdTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ClientId", txtClientId, "Text");
        BindingSource.Bindings.Add(txtClientIdTextBinding);
                    // txtHost.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtHostTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Host", txtHost, "Text");
        BindingSource.Bindings.Add(txtHostTextBinding);
                    // txtApprovalUrl.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtApprovalUrlTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserApprovalUrl", txtApprovalUrl, "Text");
        BindingSource.Bindings.Add(txtApprovalUrlTextBinding);
                    // txtApprovalData.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtApprovalDataTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("UserApprovalData", txtApprovalData, "Text");
        BindingSource.Bindings.Add(txtApprovalDataTextBinding);
                       // chkRequiresRefresh.Checked Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding chkRequiresRefreshCheckedBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("RequiresRefreshToken", chkRequiresRefresh, "Checked");
        BindingSource.Bindings.Add(chkRequiresRefreshCheckedBinding);
                    // txtRefreshMethod.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtRefreshMethodTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("RefreshTokenMethod", txtRefreshMethod, "Text");
        BindingSource.Bindings.Add(txtRefreshMethodTextBinding);
                    // txtRefreshUrl.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtRefreshUrlTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("RefreshTokenUrl", txtRefreshUrl, "Text");
        BindingSource.Bindings.Add(txtRefreshUrlTextBinding);
                    // txtRefreshData.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtRefreshDataTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("RefreshTokenData", txtRefreshData, "Text");
        BindingSource.Bindings.Add(txtRefreshDataTextBinding);
                       // chkRequiresAccess.Checked Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding chkRequiresAccessCheckedBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("RequiresAccessToken", chkRequiresAccess, "Checked");
        BindingSource.Bindings.Add(chkRequiresAccessCheckedBinding);
                    // txtAccessMethod.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtAccessMethodTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("AccessTokenMethod", txtAccessMethod, "Text");
        BindingSource.Bindings.Add(txtAccessMethodTextBinding);
                    // txtAccessUrl.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtAccessUrlTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("AccessTokenUrl", txtAccessUrl, "Text");
        BindingSource.Bindings.Add(txtAccessUrlTextBinding);
                    // txtAccessData.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtAccessDataTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("AccessTokenData", txtAccessData, "Text");
        BindingSource.Bindings.Add(txtAccessDataTextBinding);
    
   
            }
                                                                                                                                     
protected void btnSave_ClickAction(object sender, EventArgs e) {
  Sage.Entity.Interfaces.IOAuthProvider _entity = BindingSource.Current as Sage.Entity.Interfaces.IOAuthProvider;
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

  
}
protected void btnDelete_ClickAction(object sender, EventArgs e) {
  Sage.Platform.Orm.Interfaces.IPersistentEntity persistentEntity = this.BindingSource.Current as Sage.Platform.Orm.Interfaces.IPersistentEntity;
  if (persistentEntity != null) {
    persistentEntity.Delete();
  }

  
}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 btnSave.Click += new ImageClickEventHandler(btnSave_ClickAction);
btnDelete.Click += new ImageClickEventHandler(btnDelete_ClickAction);


}

protected override void OnFormBound()
{
ClientBindingMgr.RegisterSaveButton(btnSave);

if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}


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
    get { return _formAdapter ?? (_formAdapter = new OAuthProviderDetailAdapter(this)); }
}

public class OAuthProviderDetailAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IOAuthProviderDetail
{
    public OAuthProviderDetailAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ITextBoxControl _txtProviderKey;
    public  Sage.Platform.Controls.ITextBoxControl txtProviderKey
    {
        get { return FindControl(ref _txtProviderKey, "txtProviderKey"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtEndPointURL;
    public  Sage.Platform.Controls.ITextBoxControl txtEndPointURL
    {
        get { return FindControl(ref _txtEndPointURL, "txtEndPointURL"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtSecret;
    public  Sage.Platform.Controls.ITextBoxControl txtSecret
    {
        get { return FindControl(ref _txtSecret, "txtSecret"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtClientId;
    public  Sage.Platform.Controls.ITextBoxControl txtClientId
    {
        get { return FindControl(ref _txtClientId, "txtClientId"); }
    }
    private Sage.Platform.Controls.IUrlControl _txtHost;
    public  Sage.Platform.Controls.IUrlControl txtHost
    {
        get { return FindControl(ref _txtHost, "txtHost"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtApprovalUrl;
    public  Sage.Platform.Controls.ITextBoxControl txtApprovalUrl
    {
        get { return FindControl(ref _txtApprovalUrl, "txtApprovalUrl"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtApprovalData;
    public  Sage.Platform.Controls.ITextBoxControl txtApprovalData
    {
        get { return FindControl(ref _txtApprovalData, "txtApprovalData"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _chkRequiresRefresh;
    public  Sage.Platform.Controls.ICheckBoxControl chkRequiresRefresh
    {
        get { return FindControl(ref _chkRequiresRefresh, "chkRequiresRefresh"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtRefreshUrl;
    public  Sage.Platform.Controls.ITextBoxControl txtRefreshUrl
    {
        get { return FindControl(ref _txtRefreshUrl, "txtRefreshUrl"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtRefreshData;
    public  Sage.Platform.Controls.ITextBoxControl txtRefreshData
    {
        get { return FindControl(ref _txtRefreshData, "txtRefreshData"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _chkRequiresAccess;
    public  Sage.Platform.Controls.ICheckBoxControl chkRequiresAccess
    {
        get { return FindControl(ref _chkRequiresAccess, "chkRequiresAccess"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtAccessUrl;
    public  Sage.Platform.Controls.ITextBoxControl txtAccessUrl
    {
        get { return FindControl(ref _txtAccessUrl, "txtAccessUrl"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtAccessData;
    public  Sage.Platform.Controls.ITextBoxControl txtAccessData
    {
        get { return FindControl(ref _txtAccessData, "txtAccessData"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtProviderName;
    public  Sage.Platform.Controls.ITextBoxControl txtProviderName
    {
        get { return FindControl(ref _txtProviderName, "txtProviderName"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtRefreshMethod;
    public  Sage.Platform.Controls.ITextBoxControl txtRefreshMethod
    {
        get { return FindControl(ref _txtRefreshMethod, "txtRefreshMethod"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtAccessMethod;
    public  Sage.Platform.Controls.ITextBoxControl txtAccessMethod
    {
        get { return FindControl(ref _txtAccessMethod, "txtAccessMethod"); }
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
    private Sage.Platform.Controls.IButtonControl _btnDelete;
    public  Sage.Platform.Controls.IButtonControl btnDelete
    {
        get { return FindControl(ref _btnDelete, "btnDelete"); }
    }

}

</script>

<script type="text/javascript">
</script>
