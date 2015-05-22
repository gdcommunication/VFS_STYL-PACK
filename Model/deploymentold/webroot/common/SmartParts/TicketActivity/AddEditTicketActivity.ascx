<%@ Control Language="C#" ClassName="AddEditTicketActivity" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
   <asp:Label ID="lnkAccount_lbl" AssociatedControlID="lnkAccount" runat="server" Text="<%$ resources: lnkAccount.Caption %>" ></asp:Label>
 </div>
  <SalesLogix:PageLink runat="server" ID="lnkAccount" NavigateUrl="Account"         LinkType="EntityAlias"></SalesLogix:PageLink>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtUnits_lbl" AssociatedControlID="txtUnits" runat="server" Text="<%$ resources: txtUnits.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtUnits" ReadOnly="true"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="lnkContact_lbl" AssociatedControlID="lnkContact" runat="server" Text="<%$ resources: lnkContact.Caption %>" ></asp:Label>
 </div>
  <SalesLogix:PageLink runat="server" ID="lnkContact" NavigateUrl="Contact"         LinkType="EntityAlias"></SalesLogix:PageLink>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtElapsedUnits_lbl" AssociatedControlID="txtElapsedUnits" runat="server" Text="<%$ resources: txtElapsedUnits.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtElapsedUnits" ReadOnly="true"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="lnkTicket_lbl" AssociatedControlID="lnkTicket" runat="server" Text="<%$ resources: lnkTicket.Caption %>" ></asp:Label>
 </div>
  <SalesLogix:PageLink runat="server" ID="lnkTicket" NavigateUrl="Ticket"         LinkType="EntityAlias"></SalesLogix:PageLink>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="lueChargeType_lbl" AssociatedControlID="lueChargeType" runat="server" Text="<%$ resources: lueChargeType.Caption %>" ></asp:Label>
 </div>   
  <div   class="textcontrol lookup"   >
<SalesLogix:LookupControl runat="server" ID="lueChargeType" ButtonToolTip="<%$ resources: lueChargeType.ButtonToolTip %>" LookupEntityName="TicketActivityRate" LookupEntityTypeName="Sage.Entity.Interfaces.ITicketActivityRate, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" AutoPostBack="true"  >
<LookupProperties>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueChargeType.LookupProperties.TypeDescription.PropertyHeader %>" PropertyName="TypeDescription" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueChargeType.LookupProperties.RateTypeCode.PropertyHeader %>" PropertyName="RateTypeCode" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="False"></SalesLogix:LookupProperty>
<SalesLogix:LookupProperty PropertyHeader="<%$ resources: lueChargeType.LookupProperties.Amount.PropertyHeader %>" PropertyName="Amount" PropertyType="System.String" PropertyFormat="None" PropertyFormatString="" UseAsResult="True" ExcludeFromFilters="True"></SalesLogix:LookupProperty>
</LookupProperties>
<LookupPreFilters>
</LookupPreFilters>
</SalesLogix:LookupControl>
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pklActivityTypeCode_lbl" AssociatedControlID="pklActivityTypeCode" runat="server" Text="<%$ resources: pklActivityTypeCode.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="pklActivityTypeCode" PickListName="Ticket Activity" NoneEditable="true" AlphaSort="true" StorageMode="ID"  />
  </div>

      </td>
                <td  >
<div class=" lbl alignleft">
    <asp:Label ID="curRate_lbl" AssociatedControlID="curRate" runat="server" Text="<%$ resources: curRate.Caption %>" ></asp:Label>
</div>
 <div  class="textcontrol currency"  >
    <SalesLogix:Currency
    runat="server"
    ID="curRate" 
    ExchangeRateType="BaseRate"
    ReadOnly="true"  Required="false"
 DisplayCurrencyCode="false" DecimalDigits="-1"
 />
</div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pklPublicAccessCode_lbl" AssociatedControlID="pklPublicAccessCode" runat="server" Text="<%$ resources: pklPublicAccessCode.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="pklPublicAccessCode" PickListName="Ticket Activity Public Access" NoneEditable="true" AlphaSort="true" StorageMode="ID"  />
  </div>

      </td>
                <td  >
<div class=" lbl alignleft">
    <asp:Label ID="curTotalLabor_lbl" AssociatedControlID="curTotalLabor" runat="server" Text="<%$ resources: curTotalLabor.Caption %>" ></asp:Label>
</div>
 <div  class="textcontrol currency"  >
    <SalesLogix:Currency
    runat="server"
    ID="curTotalLabor" 
    ExchangeRateType="BaseRate"
    ReadOnly="true"  Required="false"
 DisplayCurrencyCode="false" DecimalDigits="-1"
 />
</div>

      </td>
      </tr>
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
    <asp:Label ID="curTotalParts_lbl" AssociatedControlID="curTotalParts" runat="server" Text="<%$ resources: curTotalParts.Caption %>" ></asp:Label>
</div>
 <div  class="textcontrol currency"  >
    <SalesLogix:Currency
    runat="server"
    ID="curTotalParts" 
    ExchangeRateType="BaseRate"
    ReadOnly="true"  Required="false"
 DisplayCurrencyCode="false" DecimalDigits="-1"
 />
</div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="dtpAssignedDate_lbl" AssociatedControlID="dtpAssignedDate" runat="server" Text="<%$ resources: dtpAssignedDate.Caption %>" ></asp:Label>
 </div>
   <div  class="textcontrol datepicker"  >
    <SalesLogix:DateTimePicker runat="server" ID="dtpAssignedDate" ButtonToolTip="<%$ resources: dtpAssignedDate.ButtonToolTip %>" AutoPostBack="true" />
  </div>

      </td>
                <td  >
<div class=" lbl alignleft">
    <asp:Label ID="curTotalFee_lbl" AssociatedControlID="curTotalFee" runat="server" Text="<%$ resources: curTotalFee.Caption %>" ></asp:Label>
</div>
 <div  class="textcontrol currency"  >
    <SalesLogix:Currency
    runat="server"
    ID="curTotalFee" 
    ExchangeRateType="BaseRate"
    ReadOnly="true"  Required="false"
 DisplayCurrencyCode="false" DecimalDigits="-1"
 />
</div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="dtpCompletedDate_lbl" AssociatedControlID="dtpCompletedDate" runat="server" Text="<%$ resources: dtpCompletedDate.Caption %>" ></asp:Label>
 </div>
   <div  class="textcontrol datepicker"  >
    <SalesLogix:DateTimePicker runat="server" ID="dtpCompletedDate" ButtonToolTip="<%$ resources: dtpCompletedDate.ButtonToolTip %>" AutoPostBack="true" />
  </div>

      </td>
                <td rowspan="2"  >
<asp:Panel runat="server" ID="ctrlstComments" CssClass="controlslist "
>
   <div class=" lbl alignleft" >
   <asp:Label ID="txtComments_lbl" AssociatedControlID="txtComments" runat="server" Text="<%$ resources: txtComments.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtComments"  Rows="3" TextMode="MultiLine" Columns="40" dojoType="Sage.UI.Controls.SimpleTextarea"  />
  </div>

   <asp:ImageButton runat="server" ID="cmdAddDateStamp"
 ToolTip="<%$ resources: cmdAddDateStamp.ToolTip %>" CssClass="qfButtonContainer" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=User_Date_Stamp_16x16"  />
 
</asp:Panel>
      </td>
      </tr>
<tr>
            <td  >
<div class="slxlabel  alignleft  checkbox ">

  <SalesLogix:SLXCheckBox runat="server" ID="chkFollowUp"  Text="<%$ resources: chkFollowUp.Caption %>"  CssClass=""
LabelPlacement="right"  />
</div>
      </td>
            </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="AddEditTicketActivity_RTools" ToolbarLocation="right">
    <asp:ImageButton runat="server" ID="cmdSave"
 AlternateText="<%$ resources: cmdSave.Caption %>"  ToolTip="<%$ resources: cmdSave.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_16x16"  />
   
    <SalesLogix:PageLink runat="server" ID="lnkCancel" NavigateUrl="Ticket"   ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=cancl_16"     ToolTip="<%$ resources: lnkCancel.ToolTip %>"     LinkType="EntityAlias"></SalesLogix:PageLink>

  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=AddEditTicketActivity&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkAddEditTicketActivityHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="AddEditTicketActivity" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.ITicketActivity); }
}

 private Sage.Platform.WebPortal.Binding.WebEntityBindingSource _dtsTicketDataSource;
public Sage.Platform.WebPortal.Binding.WebEntityBindingSource dtsTicketDataSource
{ 
  get 
  {
    if (_dtsTicketDataSource == null)
    {
             _dtsTicketDataSource = new Sage.Platform.WebPortal.Binding.WebEntityBindingSource(typeof(Sage.Entity.Interfaces.ITicket),
	    EntityType              );       	   	}
 	return _dtsTicketDataSource;
  }
}

void dtsTicketDataSource_OnCurrentEntitySet(object sender, EventArgs e) 
{
    Sage.Entity.Interfaces.ITicket _entity = GetParentEntity() as Sage.Entity.Interfaces.ITicket;
    if (_entity != null) {
        dtsTicketDataSource.Current = _entity;
    }
   if (Visible)
   {   
      RegisterBindingsWithClient(dtsTicketDataSource);
   }
}

 



 

protected override void OnAddEntityBindings() {
                 // lnkAccount.EntityId Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lnkAccountEntityIdBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Ticket.Account.Id", lnkAccount, "EntityId");
        BindingSource.Bindings.Add(lnkAccountEntityIdBinding);
                 // lnkAccount.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lnkAccountTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Ticket.Account", lnkAccount, "Text");
        lnkAccountTextBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(lnkAccountTextBinding);
                    // txtUnits.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtUnitsTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Units", txtUnits, "Text", "{0:n0}", "");
        BindingSource.Bindings.Add(txtUnitsTextBinding);
                    // lnkContact.EntityId Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lnkContactEntityIdBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Ticket.Contact.Id", lnkContact, "EntityId");
        BindingSource.Bindings.Add(lnkContactEntityIdBinding);
                 // lnkContact.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lnkContactTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Ticket.Contact", lnkContact, "Text");
        lnkContactTextBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(lnkContactTextBinding);
                    // txtElapsedUnits.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtElapsedUnitsTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ElapsedUnits", txtElapsedUnits, "Text", "{0:f}", "");
        BindingSource.Bindings.Add(txtElapsedUnitsTextBinding);
                    // lnkTicket.EntityId Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lnkTicketEntityIdBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Ticket.Id", lnkTicket, "EntityId");
        BindingSource.Bindings.Add(lnkTicketEntityIdBinding);
                 // lnkTicket.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lnkTicketTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Ticket.TicketNumber", lnkTicket, "Text");
        lnkTicketTextBinding.IgnoreFLSDisabling = true;
        BindingSource.Bindings.Add(lnkTicketTextBinding);
                    // lueChargeType.LookupResultValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lueChargeTypeLookupResultValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("RateTypeDescription", lueChargeType, "LookupResultValue", "", null);
        BindingSource.Bindings.Add(lueChargeTypeLookupResultValueBinding);
                    // pklActivityTypeCode.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pklActivityTypeCodePickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ActivityTypeCode", pklActivityTypeCode, "PickListValue", "", null);
        BindingSource.Bindings.Add(pklActivityTypeCodePickListValueBinding);
                    // curRate.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding curRateTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Rate", curRate, "Text");
        BindingSource.Bindings.Add(curRateTextBinding);
                    // pklPublicAccessCode.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pklPublicAccessCodePickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("PublicAccessCode", pklPublicAccessCode, "PickListValue", "", null);
        BindingSource.Bindings.Add(pklPublicAccessCodePickListValueBinding);
                    // curTotalLabor.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding curTotalLaborTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("TotalLabor", curTotalLabor, "Text");
        BindingSource.Bindings.Add(curTotalLaborTextBinding);
                    // usrUser.LookupResultValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding usrUserLookupResultValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("User", usrUser, "LookupResultValue");
        BindingSource.Bindings.Add(usrUserLookupResultValueBinding);
                    // curTotalParts.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding curTotalPartsTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("TotalParts", curTotalParts, "Text");
        BindingSource.Bindings.Add(curTotalPartsTextBinding);
                    // dtpAssignedDate.DateTimeValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding dtpAssignedDateDateTimeValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("AssignedDate", dtpAssignedDate, "DateTimeValue", "", null);
        BindingSource.Bindings.Add(dtpAssignedDateDateTimeValueBinding);
                    // curTotalFee.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding curTotalFeeTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("TotalFee", curTotalFee, "Text");
        BindingSource.Bindings.Add(curTotalFeeTextBinding);
                    // dtpCompletedDate.DateTimeValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding dtpCompletedDateDateTimeValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("CompletedDate", dtpCompletedDate, "DateTimeValue", "", null);
        BindingSource.Bindings.Add(dtpCompletedDateDateTimeValueBinding);
                       // txtComments.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtCommentsTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ActivityDescription", txtComments, "Text");
        BindingSource.Bindings.Add(txtCommentsTextBinding);
                       // chkFollowUp.Checked Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding chkFollowUpCheckedBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("FollowUp", chkFollowUp, "Checked", "", null);
        BindingSource.Bindings.Add(chkFollowUpCheckedBinding);
    
     BindingSource.OnCurrentEntitySet += new EventHandler(dtsTicketDataSource_OnCurrentEntitySet);
    
        }
                                                                                                                                     
protected void lueChargeType_ChangeAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.ITicketActivity>("TicketActivity.DoTicketActivityCalculations", objarray);

  
}
protected void dtpAssignedDate_ChangeAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.ITicketActivity>("TicketActivity.DoTicketActivityCalculations", objarray);

  
}
protected void dtpCompletedDate_ChangeAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.ITicketActivity>("TicketActivity.DoTicketActivityCalculations", objarray);

  
}
protected void cmdAddDateStamp_ClickAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.ITicketActivity>("TicketActivity.AddTicketActivityCommentsTimeStamp", objarray);

  
}
protected void cmdSave_ClickAction(object sender, EventArgs e) {
  Sage.Entity.Interfaces.ITicketActivity _entity = BindingSource.Current as Sage.Entity.Interfaces.ITicketActivity;
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

          cmdSave_ClickActionBRC(sender, e);
    
  
}
protected void cmdSave_ClickActionBRC(object sender, EventArgs e) {
Session.Remove("TicketActivityComments");
Sage.Entity.Interfaces.ITicketActivity ticketActivity = this.BindingSource.Current as Sage.Entity.Interfaces.ITicketActivity;
if (ticketActivity != null)
{
    Response.Redirect(string.Format("Ticket.aspx?entityId={0}", ticketActivity.Ticket.Id));
}

}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 lueChargeType.LookupResultValueChanged += new EventHandler(lueChargeType_ChangeAction);
dtpAssignedDate.DateTimeValueChanged += new EventHandler(dtpAssignedDate_ChangeAction);
dtpCompletedDate.DateTimeValueChanged += new EventHandler(dtpCompletedDate_ChangeAction);
cmdAddDateStamp.Click += new ImageClickEventHandler(cmdAddDateStamp_ClickAction);
cmdSave.Click += new ImageClickEventHandler(cmdSave_ClickAction);


}

protected void quickformload0(object sender, EventArgs e) {
Sage.Platform.WebPortal.EntityPage page = (Sage.Platform.WebPortal.EntityPage) Page;
Sage.Entity.Interfaces.ITicketActivity ticketActivity =
    BindingSource.Current as Sage.Entity.Interfaces.ITicketActivity;
if (page.ModeId.ToUpper() == "INSERT")
{
    Sage.Platform.Application.IEntityHistoryService history =
        Sage.Platform.Application.ApplicationContext.Current.Services.Get
            <Sage.Platform.Application.IEntityHistoryService>(true);
    if (history != null)
    {
        foreach (Sage.Platform.Application.EntityHistory historyType in history)
        {
            if (!string.IsNullOrEmpty(historyType.EntityId.ToString()) &&
                (historyType.EntityType.Name.ToUpper() == "ITICKET"))
            {
                ticketActivity.ActivityDescription = Session["TicketActivityComments"].ToString();
                ticketActivity.Ticket =
                    Sage.Platform.EntityFactory.GetRepository<Sage.Entity.Interfaces.ITicket>().Get(
                        historyType.EntityId);
                break;
            }
        }
    }
    page.TitleBar.Text = GetLocalResourceObject("DialogCaption_Insert").ToString();
}
else
{
    page.TitleBar.Text = GetLocalResourceObject("DialogCaption_Edit").ToString();
}
if (Request.QueryString["isPunchOut"] != null)
{
    ticketActivity.CompletedDate = DateTime.UtcNow;
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
ScriptManager.RegisterStartupScript(Page, GetType(), "cleanupcontainer", "jQuery(\".controlslist > div:empty\").remove();", true);
ClientBindingMgr.RegisterSaveButton(cmdSave);

if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
dtsTicketDataSource.Bind();



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
    get { return _formAdapter ?? (_formAdapter = new AddEditTicketActivityAdapter(this)); }
}

public class AddEditTicketActivityAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IAddEditTicketActivity
{
    public AddEditTicketActivityAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ILinkControl _lnkAccount;
    public  Sage.Platform.Controls.ILinkControl lnkAccount
    {
        get { return FindControl(ref _lnkAccount, "lnkAccount"); }
    }
    private Sage.Platform.Controls.ILinkControl _lnkContact;
    public  Sage.Platform.Controls.ILinkControl lnkContact
    {
        get { return FindControl(ref _lnkContact, "lnkContact"); }
    }
    private Sage.Platform.Controls.ILinkControl _lnkTicket;
    public  Sage.Platform.Controls.ILinkControl lnkTicket
    {
        get { return FindControl(ref _lnkTicket, "lnkTicket"); }
    }
    private Sage.Platform.Controls.IPickListControl _pklActivityTypeCode;
    public  Sage.Platform.Controls.IPickListControl pklActivityTypeCode
    {
        get { return FindControl(ref _pklActivityTypeCode, "pklActivityTypeCode"); }
    }
    private Sage.Platform.Controls.IPickListControl _pklPublicAccessCode;
    public  Sage.Platform.Controls.IPickListControl pklPublicAccessCode
    {
        get { return FindControl(ref _pklPublicAccessCode, "pklPublicAccessCode"); }
    }
    private Sage.Platform.Controls.IUserControl _usrUser;
    public  Sage.Platform.Controls.IUserControl usrUser
    {
        get { return FindControl(ref _usrUser, "usrUser"); }
    }
    private Sage.Platform.Controls.IDateTimePickerControl _dtpAssignedDate;
    public  Sage.Platform.Controls.IDateTimePickerControl dtpAssignedDate
    {
        get { return FindControl(ref _dtpAssignedDate, "dtpAssignedDate"); }
    }
    private Sage.Platform.Controls.IDateTimePickerControl _dtpCompletedDate;
    public  Sage.Platform.Controls.IDateTimePickerControl dtpCompletedDate
    {
        get { return FindControl(ref _dtpCompletedDate, "dtpCompletedDate"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _chkFollowUp;
    public  Sage.Platform.Controls.ICheckBoxControl chkFollowUp
    {
        get { return FindControl(ref _chkFollowUp, "chkFollowUp"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtUnits;
    public  Sage.Platform.Controls.ITextBoxControl txtUnits
    {
        get { return FindControl(ref _txtUnits, "txtUnits"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtElapsedUnits;
    public  Sage.Platform.Controls.ITextBoxControl txtElapsedUnits
    {
        get { return FindControl(ref _txtElapsedUnits, "txtElapsedUnits"); }
    }
    private Sage.Platform.Controls.ILookupControl _lueChargeType;
    public  Sage.Platform.Controls.ILookupControl lueChargeType
    {
        get { return FindControl(ref _lueChargeType, "lueChargeType"); }
    }
    private Sage.Platform.Controls.ICurrencyControl _curRate;
    public  Sage.Platform.Controls.ICurrencyControl curRate
    {
        get { return FindControl(ref _curRate, "curRate"); }
    }
    private Sage.Platform.Controls.ICurrencyControl _curTotalLabor;
    public  Sage.Platform.Controls.ICurrencyControl curTotalLabor
    {
        get { return FindControl(ref _curTotalLabor, "curTotalLabor"); }
    }
    private Sage.Platform.Controls.ICurrencyControl _curTotalParts;
    public  Sage.Platform.Controls.ICurrencyControl curTotalParts
    {
        get { return FindControl(ref _curTotalParts, "curTotalParts"); }
    }
    private Sage.Platform.Controls.ICurrencyControl _curTotalFee;
    public  Sage.Platform.Controls.ICurrencyControl curTotalFee
    {
        get { return FindControl(ref _curTotalFee, "curTotalFee"); }
    }
    private Sage.Platform.Controls.IControlsListControl _ctrlstComments;
    public  Sage.Platform.Controls.IControlsListControl ctrlstComments
    {
        get { return FindControl(ref _ctrlstComments, "ctrlstComments"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtComments;
    public  Sage.Platform.Controls.ITextBoxControl txtComments
    {
        get { return FindControl(ref _txtComments, "txtComments"); }
    }
    private Sage.Platform.Controls.IButtonControl _cmdAddDateStamp;
    public  Sage.Platform.Controls.IButtonControl cmdAddDateStamp
    {
        get { return FindControl(ref _cmdAddDateStamp, "cmdAddDateStamp"); }
    }
    private Sage.Platform.Controls.IDataSourceControl _dtsTicketDataSource;
    public  Sage.Platform.Controls.IDataSourceControl dtsTicketDataSource
    {
        get { return FindControl(ref _dtsTicketDataSource, "dtsTicketDataSource"); }
    }
    private Sage.Platform.Controls.IButtonControl _cmdSave;
    public  Sage.Platform.Controls.IButtonControl cmdSave
    {
        get { return FindControl(ref _cmdSave, "cmdSave"); }
    }
    private Sage.Platform.Controls.ILinkControl _lnkCancel;
    public  Sage.Platform.Controls.ILinkControl lnkCancel
    {
        get { return FindControl(ref _lnkCancel, "lnkCancel"); }
    }

}

</script>

<script type="text/javascript">
</script>
