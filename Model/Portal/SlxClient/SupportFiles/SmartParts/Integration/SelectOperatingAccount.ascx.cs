﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Sage.Entity.Interfaces;
using Sage.Platform;
using Sage.Platform.Application;
using Sage.Platform.Application.UI;
using Sage.Platform.SData;
using Sage.Platform.WebPortal.SmartParts;
using Sage.SalesLogix.Services.Integration;

public partial class SelectOperatingAccount : EntityBoundSmartPartInfoProvider
{
    private IntegrationManager _integrationManager;
    private bool _loadResults = true;

    /// <summary>
    /// Gets the integration manager.
    /// </summary>
    /// <value>The integration manager.</value>
    public IntegrationManager IntegrationManager
    {
        get
        {
            if (_integrationManager == null)
            {
                IAccount sourceAccount = DialogService.DialogParameters.ContainsKey("LinkAccountSelectedId")
                                             ? EntityFactory.GetRepository<IAccount>().Get(
                                                   DialogService.DialogParameters["LinkAccountSelectedId"])
                                             : EntityFactory.GetRepository<IAccount>().Get(
                                                   EntityContext.EntityID.ToString());
                _integrationManager = new IntegrationManager(sourceAccount);
            }
            return _integrationManager;
        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        if (_loadResults)
        {
            LoadOppCompanies();
        }
    }

    private void LoadOppCompanies()
    {
        lbxSystems.Items.Clear();
        bool mapped = false;
        string linkedTo = String.Empty;
        bool restrict = Sage.SalesLogix.BusinessRules.BusinessRuleHelper.RestrictToSingleAccountingSystem(IntegrationManager.SourceAccount.AppId);
        if (!restrict)
        {
            var mappingSvc = ApplicationContext.Current.Services.Get<IAppIdMappingService>(true);
            var mappings = mappingSvc.GetApplicationEndpoints(true);
            foreach (IAppIdMapping map in mappings)
            {
                bool addMapping = true;
                if (map.Enabled ?? false)
                {
                    if (IntegrationManager.SourceAccount.AccountOperatingCompanies.Count > 0)
                    {
                        foreach (IAccountOperatingCompany operatingCompany in IntegrationManager.SourceAccount.AccountOperatingCompanies)
                        {
                            if (operatingCompany.IntegrationApplication.EndPointURL == map.EndPointURL)
                            {
                                linkedTo += String.Format("{0}, ", map.Name);
                                mapped = true;
                                addMapping = false;
                                break;
                            }
                        }
                        if (addMapping)
                        {
                            ListItem item = new ListItem { Text = map.Name, Value = map.Id.ToString() };
                            lbxSystems.Items.Add(item);
                        }
                    }
                    else
                    {
                        ListItem item = new ListItem { Text = map.Name, Value = map.Id.ToString() };
                        lbxSystems.Items.Add(item);
                    }
                }
            }
        }
        if (lbxSystems.Items.Count <= 0)
        {
            if (!String.IsNullOrEmpty(linkedTo))
            {
                linkedTo = linkedTo.Substring(0, linkedTo.Length - 2);
            }
            lblSearchMsg.Text = restrict
                                    ? String.Format(GetLocalResourceObject("error_RestrictToSingleAccount").ToString(),
                                                    IntegrationManager.SourceAccount.AccountName,
                                                    IntegrationManager.SourceAccount.OperatingCompany != null
                                                        ? IntegrationManager.SourceAccount.OperatingCompany.Name
                                                        : String.Empty)
                                    : (mapped
                                           ? String.Format(GetLocalResourceObject("error_AlreadyMapped").ToString(),
                                                           IntegrationManager.SourceAccount.AccountName, linkedTo)
                                           : GetLocalResourceObject("error_NoAccountingFeeds").ToString());
            lblSystem.Visible = false;
            lbxSystems.Visible = false;
            lblCreateLink.Visible = false;
            btnNext.Visible = false;
            btnCancel.Text = GetLocalResourceObject("Close.Caption").ToString();
        }
        else if (lbxSystems.Items.Count.Equals(1))
        {
            btnNext.Visible = true;
            lblSystem.Visible = true;
            lbxSystems.Visible = true;
            lblSearchMsg.Text = GetLocalResourceObject("lblSearchMsg_SingleFeed.Caption").ToString();
        }
        else
        {
            lblSearchMsg.Text = GetLocalResourceObject("lblSearchMsg.Caption").ToString();
            btnNext.Visible = true;
            lblSystem.Visible = true;
            lbxSystems.Visible = true;
        }
    }

    /// <summary>
    /// Called when [wire event handlers].
    /// </summary>
    protected override void OnWireEventHandlers()
    {
        base.OnWireEventHandlers();
        btnNext.Click += btnNext_ClickAction;
        btnCancel.Click += DialogService.CloseEventHappened;
    }

    /// <summary>
    /// Handles the ClickAction event of the btnNext control.
    /// </summary>
    /// <param name="sender">The source of the event.</param>
    /// <param name="e">The <see cref="System.EventArgs"/> instance containing the event data.</param>
    protected void btnNext_ClickAction(object sender, EventArgs e)
    {
        IntegrationManager.TargetMapping = EntityFactory.GetRepository<IAppIdMapping>().FindFirstByProperty(
            "Id", lbxSystems.SelectedValue);
        string caption = GetLocalResourceObject("LinkAccounting.Caption").ToString();
        DialogService.SetSpecs(200, 200, 400, 800, "SearchResults", caption, true);
        DialogService.DialogParameters.Remove("IntegrationManager");
        DialogService.DialogParameters.Add("IntegrationManager", IntegrationManager);
        DialogService.ShowDialog();
    }

    /// <summary>
    /// Gets the type of the entity.
    /// </summary>
    /// <value>The type of the entity.</value>
    public override Type EntityType
    {
        get { return typeof(IAppIdMapping); }
    }

    /// <summary>
    /// Called when [add entity bindings].
    /// </summary>
    protected override void OnAddEntityBindings()
    {
    }

    /// <summary>
    /// Called when the dialog is closing.
    /// </summary>
    protected override void OnClosing()
    {
        _loadResults = false;
    }

    /// <summary>
    /// Gets the smart part info.
    /// </summary>
    /// <param name="smartPartInfoType">Type of the smart part info.</param>
    /// <returns></returns>
    public override ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
    {
        ToolsSmartPartInfo tinfo = new ToolsSmartPartInfo();
        foreach (Control c in SelectOperatingAccount_RTools.Controls)
        {
            tinfo.RightTools.Add(c);
        }
        return tinfo;
    }
}