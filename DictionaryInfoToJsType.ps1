if ($null -eq $Script:InstanceUrl) {
    Set-Variable -Name 'InstanceUrl' -Value ([Uri]::new('https://dev109722.service-now.com', [UriKind]::Absolute)) -Option Constant -Scope 'Script';
}
Function Get-TableDefinitionUrls {
    [CmdletBinding()]
    Param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [string[]]$TableName
    )

    Begin {
        $UriBuilder = [System.UriBuilder]::new($Script:InstanceUrl);
    }
    Process {
        $UriBuilder.Path = '/sys_db_object_list.do';
        $UriBuilder.Query = "sysparm_first_row=1&sysparm_query=GOTOname%3D$([Uri]::EscapeDataString($TableName))";
        $UriBuilder.Uri.AbsoluteUri | Write-Output;
        $UriBuilder.Path = '/sys_dictionary_list.do';
        $UriBuilder.Query = "sysparm_first_row=1&sysparm_query=GOTOname%3D$([Uri]::EscapeDataString($TableName))&XML";
        $UriBuilder.Uri.AbsoluteUri | Write-Output;
        $UriBuilder.Path = '/sys_documentation_list.do';
        $UriBuilder.Uri.AbsoluteUri | Write-Output;
    }
}

class SNsys_scope {
    [string]$name;
    [string]$display_value;
    SNsys_scope([System.Xml.XmlElement]$Element) {
        if ($null -eq $Element) {
            $this.name = $this.display_value = '';
        } else {
            if ($Element.PSBase.IsEmpty) {
                $this.name = '';
            } else {
                $this.name = $Element.PSBase.InnerText.Trim();
            }
            $a = $Element.PSBase.Attributes['display_value'];
            if ($null -eq $a) {
                $this.display_value = $this.name;
            } else {
                $this.display_value = $a.Value.Trim();
            }
        }
    }
}

class SNsys_package {
    [string]$sys_id;
    [string]$name;
    [string]$source;
    SNsys_package([System.Xml.XmlElement]$Element) {
        if ($null -eq $Element) {
            $this.sys_id = $this.name = $this.source = '';
        } else {
            if ($Element.PSBase.IsEmpty) {
                $this.sys_id = '';
            } else {
                $this.sys_id = $Element.PSBase.InnerText.Trim();
            }
            $a = $Element.PSBase.Attributes['name'];
            if ($null -eq $a) {
                $this.name = '';
            } else {
                $this.name = $a.Value.Trim();
            }
            $a = $Element.PSBase.Attributes['source'];
            if ($null -eq $a) {
                $this.source = '';
            } else {
                $this.source = $a.Value.Trim();
            }
        }
    }
}

class SNsuper_class {
    [string]$sys_id;
    [string]$name;
    [string]$display_value;
    SNsuper_class([System.Xml.XmlElement]$Element) {
        if ($null -eq $Element) {
            $this.sys_id = $this.name = $this.display_value = '';
        } else {
            if ($Element.PSBase.IsEmpty) {
                $this.sys_id = '';
            } else {
                $this.sys_id = $Element.PSBase.InnerText.Trim();
            }
            $a = $Element.PSBase.Attributes['name'];
            if ($null -eq $a) {
                $this.name = '';
            } else {
                $this.name = $a.Value.Trim();
            }
            $a = $Element.PSBase.Attributes['display_value'];
            if ($null -eq $a) {
                if ($this.name.length -gt 0) {
                    $this.display_value = $this.name;
                } else {
                    $this.display_value = $this.sys_id;
                }
            } else {
                $this.display_value = $a.Value.Trim();
            }
        }
    }
}

class SNsys_documentation {
    [string]$help;
    [string]$hint;
    [string]$label;
    [string]$plural;
    SNsys_documentation([System.Xml.XmlElement]$Element) {
        if ($null -eq $Element) {
            $this.help = $this.hint = $this.label = $this.plural = '';
        } else {
            $this.help = ('' + $Element.help).Trim();
            $this.hint = ('' + $Element.hint).Trim();
            $this.label = ('' + $Element.label).Trim();
            $this.plural = ('' + $Element.plural).Trim();
        }
    }
}

class SNsys_dictionary {
    [bool]$array;
    [string]$choice_field;
    [string]$choice_table;
    [string]$column_label;
    [string]$comments;
    [string]$default_value;
    [string]$name;
    [string]$table_name;
    [string]$internal_type;
    [bool]$mandatory;
    [int]$max_length;
    [string]$reference;
    [string]$sys_id;
    [string]$sys_name;

    [SNsuper_class]$super_class;
    [SNsys_package]$sys_package;
    [SNsys_scope]$sys_scope;
    [SNsys_documentation]$sys_documentation;
    SNsys_dictionary([System.Xml.XmlElement]$Element, [System.Xml.XmlDocument]$Documentation) {
        $this.array = ('' + $Element.array).Trim() -ieq 'true';
        $this.choice_field = ('' + $Element.choice_field).Trim();
        $this.choice_table = ('' + $Element.choice_table).Trim();
        $this.column_label = ('' + $Element.column_label).Trim();
        $this.comments = ('' + $Element.comments).Trim();
        $this.default_value = ('' + $Element.default_value).Trim();
        $this.name = ('' + $Element.element).Trim();
        $this.table_name = ('' + $Element.name).Trim();
        $this.internal_type = ('' + $Element.internal_type).Trim();
        $this.mandatory = ('' + $Element.mandatory).Trim() -ieq 'true';
        $text = '' + $Element.max_length;
        $i = 0;
        if (-not [int]::TryParse($text.Trim(), [ref]$i)) { $i = 0 }
        $this.max_length = $i;
        $this.reference = ('' + $Element.reference).Trim();
        $this.sys_id = ('' + $Element.sys_id).Trim();
        $this.sys_name = ('' + $Element.sys_name).Trim();
        $this.sys_documentation = [SNsys_documentation]::new($Documentation.SelectSingleNode("/xml/sys_documentation[name='$($this.table_name)' and element='$($this.name)']"));
    }

    [string] GetName() {
        if ($this.name.Length -gt 0) { return $this.name }
        if ($this.sys_name.Length -gt 0) { return $this.sys_name }
        if ($this.sys_id.Length -gt 0) { return $this.sys_id }
        return '(no name)';
    }

    [string] GetLabel() {
        if ($this.sys_documentation.label.Length -gt 0) { return $this.sys_documentation.label }
        if ($this.label.Length -gt 0) { return $this.label }
        return $this.GetName();
    }

    [void] WriteTo([System.IO.TextWriter]$Writer) {
        $Writer.WriteLine('    /**');
        $ct = $this.comments;
        $PropertyDesc = [System.Collections.ObjectModel.Collection[string]]::new();
        if ($this.mandatory) {
            $PropertyDesc.Add("mandatory: true");
        }
        if ($this.sys_documentation.hint.Length -eq 0) {
            if ($ct.Length -eq 0) {
                $Writer.Write('     * The "');
                $Writer.Write($this.GetLabel());
                $Writer.WriteLine('" column.');
            } else {
                $PropertyDesc.Add("column_label: `"$($this.GetLabel())`"");
                ($ct -split '\r\n?|\n') | ForEach-Object { $_.TrimEnd() } | ForEach-Object {
                    if ($_.Length -eq 0) {
                        $Writer.WriteLine('     *');
                    } else {
                        $Writer.Write('     * ');
                        $Writer.WriteLine($_);
                    }
                }
                $ct = '';
            }
        } else {
            $PropertyDesc.Add("column_label: `"$($this.GetLabel())`"");
            ($this.sys_documentation.hint -split '\r\n?|\n') | ForEach-Object { $_.TrimEnd() } | ForEach-Object {
                if ($_.Length -eq 0) {
                    $Writer.WriteLine('     *');
                } else {
                    $Writer.Write('     * ');
                    $Writer.WriteLine($_);
                }
            }
        }
        $ColumnTypeName = 'Element';
        $ml = 0;
        $quoteDefaultValue = $true;
        switch ($this.internal_type) {
            'auto_increment' { # [longint] Auto Increment
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("scalar_type: `"longint");
                $ColumnTypeName = 'Numeric';
                $quoteDefaultValue = $false;
                break;
            }
            'boolean' { # [boolean] True/False
                $ColumnTypeName = 'Boolean';
                $quoteDefaultValue = $false;
                break;
            }
            'breakdown_element' { # [GUID] Breakdown Element
                $PropertyDesc.Add("java_class: `"com.snc.pa.dc.GlideElementBreakdownElement`"");
                $ColumnTypeName = 'BreakdownElement';
                break;
            }
            'calendar_date_time' { # [datetime] Calendar Date/Time
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.CalendarDateTime`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'char' { # [GUID] Char
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                break;
            }
            'currency' { # [decimal] Currency
                $PropertyDesc.Add("java_class: `"com.glide.currency2.GlideElementCurrency`"");
                $ColumnTypeName = 'Currency';
                $quoteDefaultValue = $false;
                break;
            }
            'currency2' { # [GUID] FX Currency
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.currency2.GlideElementCurrency2`"");
                $ColumnTypeName = 'Currency';
                break;
            }
            'data_array' { # [string] Data Array
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.snc.datastructure.GlideElementDataArray`"");
                $ml = $this.max_length;
                break;
            }
            'data_object' { # [string] Data Object
                $PropertyDesc.Add("java_class: `"com.snc.datastructure.GlideElementDataObject`"");
                $ColumnTypeName = 'DataObject';
                break;
            }
            'data_structure' { # [string] Data Structure
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.snc.datastructure.GlideElementDataStructure`"");
                break;
            }
            'date' { # [date] Other Date
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.GlideDate`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'datetime' { # [datetime] Basic Date/Time
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'day_of_week' { # [integer] Day of Week
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"DayOfWeek`"");
                $ColumnTypeName = 'Numeric';
                $quoteDefaultValue = $false;
                break;
            }
            'decimal' { # [decimal] Decimal
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementNumeric`"");
                $ColumnTypeName = 'Numeric';
                $quoteDefaultValue = $false;
                break;
            }
            'documentation_field' { # [string] Documentation Field
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementTranslatedField`"");
                $ColumnTypeName = 'TranslatedField';
                break;
            }
            'document_id' { # [GUID] Document ID
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementDocumentId`"");
                $ColumnTypeName = 'DocumentId';
                break;
            }
            'domain_id' { # [GUID] Domain ID
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementDomainId`"");
                $ColumnTypeName = 'DomainId';
                break;
            }
            'due_date' { # [datetime] Due Date
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"GlideDueDate`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'float' { # [float] Floating Point Number
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $ColumnTypeName = 'Numeric';
                $quoteDefaultValue = $false;
                break;
            }
            'glide_action_list' { # [string] UI Action List
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"GlideActionList`"");
                break;
            }
            'glide_date' { # [date] Date
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.GlideDate`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'glide_date_time' { # [datetime] Date/Time
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.GlideDateTime`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'glide_duration' { # [datetime] Duration
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.GlideDuration`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'glide_list' { # [string] List
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"om.glide.glideobject.GlideList`"");
                break;
            }
            'glide_precise_time' { # [string] Precise Time
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"GlidePreciseTime`"");
                break;
            }
            'glide_time' { # [datetime] Time
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.GlideTime`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'glide_utc_time' { # [datetime] UTC Time
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"GlideUTCTime`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'glide_var' { # [string] Glide Var
                $PropertyDesc.Add("java_class: `"com.glide.vars.GlideElementGlideVar`"");
                $ColumnTypeName = 'GlideVar';
                break;
            }
            'graphql_schema' { # [string] GraphQL Schema
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.graphql.element.GlideElementGraphQLSchema`"");
                break;
            }
            'html' { # [string] HTML
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"GlideHTML`"");
                $ml = $this.max_length;
                break;
            }
            'insert_timestamp' { # [datetime] Insert Timestamp
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'integer' { # [integer] Integer
                $quoteDefaultValue = $false;
                $ColumnTypeName = 'Numeric';
                break;
            }
            'integer_date' { # [integer] Integer Date
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"IntegerDate`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'integer_time' { # [integer] Integer Time
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"IntegerTime`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'internal_type' { # [string] Internal Type
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementInternalType`"");
                $ColumnTypeName = 'InternalType';
                break;
            }
            'journal' { # [string] Journal
                $PropertyDesc.Add("java_class: `"Journal`"");
                break;
            }
            'journal_input' { # [string] Journal Input
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"Journal`"");
                break;
            }
            'journal_list' { # [string] Journal List
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"Journal`"");
                break;
            }
            'longint' { # [longint] Long
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'mask_code' { # [string] Mask Code
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"MaskCode`"");
                break;
            }
            'metric_absolute' { # [float] Metric Absolute
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                break;
            }
            'metric_counter' { # [float] Metric Counter
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                break;
            }
            'metric_derive' { # [float] Metric Derive
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                break;
            }
            'metric_gauge' { # [float] Metric Gauge
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                break;
            }
            'month_of_year' { # [integer] Month of Year
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"MonthOfYear`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'nl_task_int1' { # [integer] NL Task Integer 1
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'order_index' { # [integer] Order Index
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'password' { # [string] Password (1 Way Encrypted)
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementPassword`"");
                $ColumnTypeName = 'Password';
                $ml = $this.max_length;
                break;
            }
            'password2' { # [string] Password (2 Way Encrypted)
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementPassword2`"");
                $ColumnTypeName = 'Password2';
                $ml = $this.max_length;
                break;
            }
            'percent_complete' { # [decimal] Percent Complete
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'phone_number_e164' { # [string] Phone Number (E164)
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementPhoneNumber`"");
                $ml = $this.max_length;
                break;
            }
            'price' { # [decimal] Price
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("java_class: `"com.glide.currency.GlideElementPrice`"");
                $ColumnTypeName = 'Price';
                break;
            }
            'reference' { # [GUID] Reference
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementReference`"");
                $ColumnTypeName = 'Reference';
                break;
            }
            'repeat_count' { # [integer] Repeat Count
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementNumeric`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'schedule_date_time' { # [string] Schedule Date/Time
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.script.fencing.ScopedGlideScheduleDateTime`"");
                break;
            }
            'schedule_interval_count' { # [integer]
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementNumeric`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'source_id' { # [GUID] Source ID
                $PropertyDesc.Add("java_class: `"com.snc.apps.glide_elements.GlideElementSourceId`"");
                $ColumnTypeName = 'SourceId';
                break;
            }
            'source_name' { # [string] Source Name
                $PropertyDesc.Add("java_class: `"com.snc.apps.glide_elements.GlideElementSourceName`"");
                $ColumnTypeName = 'SourceName';
                break;
            }
            'source_table' { # [string] Source Table
                $PropertyDesc.Add("java_class: `"com.snc.apps.glide_elements.GlideElementSourceTable`"");
                $ColumnTypeName = 'SourceTable';
                break;
            }
            'string' { # [string] String
                $ml = $this.max_length;
                break;
            }
            'string_full_utf8' { # [string] String (Full UTF-8)
                $ml = $this.max_length;
                $PropertyDesc.Add("java_class: `"GlideElementFullUTF8`"");
                $ColumnTypeName = 'FullUTF8';
                break;
            }
            'string_boolean' { # [string]
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"StringBoolean`"");
                break;
            }
            'sys_class_name' { # [string] System Class Name
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.SysClassName`"");
                $ColumnTypeName = 'SysClassName';
                break;
            }
            'template_value' { # [string] Template Value
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"GlideElementConditions`"");
                $ColumnTypeName = 'Conditions';
                break;
            }
            'time' { # [time] Basic Time
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"script.glide_elements.GlideElementGlideObject`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'timer' { # [datetime] Timer
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"com.glide.glideobject.GlideDuration`"");
                $ColumnTypeName = 'GlideObject';
                break;
            }
            'translated' { # [string] Translated
                $ml = $this.max_length;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"Translated`"");
                break;
            }
            'translated_field' { # [string] Translated Field
                $ml = $this.max_length;
                $PropertyDesc.Add("java_class: `"GlideElementTranslatedField`"");
                $ColumnTypeName = "TranslatedField";
                break;
            }
            'translated_html' { # [string] Translated HTML
                $ml = $this.max_length;
                $PropertyDesc.Add("java_class: `"GlideElementTranslatedHTML`"");
                $ColumnTypeName = 'TranslatedHTML';
                break;
            }
            'url' { # [string] URL
                $ml = $this.max_length;
                $PropertyDesc.Add("java_class: `"GlideElementURL`"");
                $ColumnTypeName = 'URL';
                break;
            }
            'user_image' { # [string] Image
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementUserImage`"");
                $ColumnTypeName = 'UserImage';
                break;
            }
            'user_input' { # [string] User Input
                $ml = $this.max_length;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"GlideUserInput`"");
                break;
            }
            'variables' { # [string] Variables
                $PropertyDesc.Add("java_class: `"com.glide.script.glide_elements.GlideElementVariables`"");
                $ColumnTypeName = 'Variables';
                break;
            }
            'week_of_month' { # [integer] Week of Month
                $quoteDefaultValue = $false;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"WeekOfMonth`"");
                $ColumnTypeName = 'Numeric';
                break;
            }
            'wiki_text' { # [string] Wiki
                $ml = $this.max_length;
                $PropertyDesc.Add("java_class: `"com.glide.wiki.GlideElementWikiText`"");
                $ColumnTypeName = 'WikiText';
                break;
            }
            'workflow' { # [string] Workflow
                $PropertyDesc.Add("java_class: `"com.glide.stages.GlideElementWorkflow`"");
                $ColumnTypeName = 'Workflow';
                break;
            }
            'wms_job' { # [string] WMS Job
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                $PropertyDesc.Add("java_class: `"script.glide_elements.GlideElementGlideObject`"");
                break;
            }
            default {
                $ml = $this.max_length;
                $PropertyDesc.Add("internal_type: `"$($this.internal_type)`"");
                break;
            }
        }
        $tn = "`$`$property.$ColumnTypeName";
        $Writer.WriteLine("     * @type {$tn}");
        $Writer.WriteLine("     * @memberof $($this.table_name)Fields");
        if ($ml -gt 0) {
            $PropertyDesc.Add("max_length: $ml");
        }
        if ($this.default_value.Length -gt 0) {
            if ($quoteDefaultValue) {
                $PropertyDesc.Add("default_value: `"$($this.default_value.Replace('\', '\\').Replace('"', '\"'))`"");
            } else {
                $PropertyDesc.Add("default_value: $($this.default_value)");
            }
        }
        $pd = $PropertyDesc -join '; ';
        if ($pd.Length -gt 0) { $pd = "$pd." }
        $Descriptions = @(($ct, $pd, $this.sys_documentation.help) | Where-Object { $_.Length -gt 0 });
        if ($Descriptions.Count -gt 0) {
            $Descriptions = @($Descriptions | ForEach-Object { $_ -split '\r\n?|\n' });
            $Writer.WriteLine("     * @description $($Descriptions[0])");
            if ($Descriptions.Count -gt 1) {
                ($Descriptions | Select-Object -Skip 1) | ForEach-Object { $_.TrimEnd() } | ForEach-Object {
                    if ($_.Length -eq 0) {
                        $Writer.WriteLine('     *');
                    } else {
                        $Writer.Write('     * ');
                        $Writer.WriteLine($_);
                    }
                }
            }
        }
        $Writer.WriteLine('     */');
        $Writer.WriteLine("    $($this.GetName()): $tn;");
    }
}

class SNsys_db_object {
    [string]$sys_id;
    [string]$label;
    [string]$name;
    [string]$sys_name;
    [bool]$is_extendable;
    [SNsuper_class]$super_class;
    [SNsys_package]$sys_package;
    [SNsys_scope]$sys_scope;
    [SNsys_documentation]$sys_documentation;
    [SNsys_dictionary[]]$Columns;
    SNsys_db_object([System.Xml.XmlElement]$Element, [System.Xml.XmlDocument]$Dictionary, [System.Xml.XmlDocument]$Documentation) {
        $this.sys_id = ('' + $Element.sys_id).Trim();
        $this.label = ('' + $Element.label).Trim();
        $this.name = ('' + $Element.name).Trim();
        $this.sys_name = ('' + $Element.sys_name).Trim();
        $this.is_extendable = ('' + $Element.is_extendable).Trim() -ieq 'true';
        $this.super_class = [SNsuper_class]::new($Element.PSBase.SelectSingleNode('super_class'));
        $this.sys_package = [SNsys_package]::new($Element.PSBase.SelectSingleNode('sys_package'));
        $this.sys_scope = [SNsys_scope]::new($Element.PSBase.SelectSingleNode('sys_scope'));
        $this.sys_documentation = [SNsys_documentation]::new($Documentation.SelectSingleNode("/xml/sys_documentation[name='$($this.name)' and string-length(normalize-space(element))=0]"));
        $this.Columns = @($Dictionary.SelectNodes("/xml/sys_dictionary[name='$($this.name)' and not(active='false')]") | ForEach-Object { [SNsys_dictionary]::new($_, $Documentation) } | Sort-Object -Property 'name');
    }

    [string] GetName() {
        if ($this.name.Length -gt 0) { return $this.name }
        if ($this.sys_name.Length -gt 0) { return $this.sys_name }
        if ($this.sys_id.Length -gt 0) { return $this.sys_id }
        return '(no name)';
    }

    [string] GetLabel() {
        if ($this.sys_documentation.label.Length -gt 0) { return $this.sys_documentation.label }
        if ($this.label.Length -gt 0) { return $this.label }
        return $this.GetName();
    }

    [void] WriteTo([System.IO.TextWriter]$Writer) {
        $Writer.Write('// #region ');
        $Writer.WriteLine($this.GetName());
        $Writer.WriteLine();
        $Writer.WriteLine('/**');
        if ($this.sys_documentation.hint.Length -gt 0) {
            ($this.sys_documentation.hint -split '\r\n?|\n') | ForEach-Object { $_.TrimEnd() } | ForEach-Object {
                if ($_.Length -eq 0) {
                    $Writer.WriteLine(' *');
                } else {
                    $Writer.Write(' * ');
                    $Writer.WriteLine($_);
                }
            }
        } else {
            $Writer.Write(' * GlideElement values from the "');
            $Writer.Write($this.GetLabel());
            $Writer.WriteLine('" table.');
        }
        $Writer.Write(' * @interface ');
        $Writer.Write($this.GetName());
        $Writer.WriteLine('Fields');
        $baseType = 'IGlideTableProperties';
        $GlideRecordType = 'GlideRecord';
        if ($this.super_class.name.Length -gt 0) {
            $baseType = "$($this.super_class.name)Fields";
            $GlideRecordType = "$($this.super_class.name)GlideRecord";
        } else {
            if ($this.is_extendable) { $baseType = 'IExtendedGlideTableProperties' }
        }
        $Writer.Write(' * @extends {');
        $Writer.Write($baseType);
        $Writer.WriteLine('}');
        if ($this.sys_documentation.hint.Length -gt 0) {
            $Writer.Write(' * @description label: "');
            $Writer.Write($this.GetLabel());
            $Writer.WriteLine('".');
            if ($this.sys_documentation.help.Length -gt 0) {
                ($this.sys_documentation.help -split '\r\n?|\n') | ForEach-Object { $_.TrimEnd() } | ForEach-Object {
                    if ($_.Length -eq 0) {
                        $Writer.WriteLine(' *');
                    } else {
                        $Writer.Write(' * ');
                        $Writer.WriteLine($_);
                    }
                }
            }
        } else {
            if ($this.sys_documentation.help.Length -gt 0) {
                $Writer.Write(' * @description ');
                $Lines = @(($this.sys_documentation.help -split '\r\n?|\n') | ForEach-Object { $_.TrimEnd() });
                $Writer.WriteLine($Lines[0]);
                if ($Lines.Count -gt 1) {
                    ($Lines | Select-Object -Skip 1) | ForEach-Object {
                        if ($_.Length -eq 0) {
                            $Writer.WriteLine(' *');
                        } else {
                            $Writer.Write(' * ');
                            $Writer.WriteLine($_);
                        }
                    }
                }
            }
        }
        $Writer.Write(' * @see {');
        $Writer.Write($this.name);
        $Writer.WriteLine('GlideRecord}');
        $Writer.WriteLine(' */');
        $Writer.Write('declare interface ');
        $Writer.Write($this.GetName());
        $Writer.Write('Fields extends ');
        $Writer.Write($baseType);
        if ($this.Columns.Length -eq 0) {
            $writer.WriteLine(' { }');
        } else {
            $writer.Write(' {');
            $this.Columns | ForEach-Object {
                $Writer.WriteLine();
                $_.WriteTo($Writer);
            }
            $writer.WriteLine('}');
        }
        $Writer.WriteLine();
        $Writer.WriteLine('/**');
        $Writer.Write(' * Type of {@link GlideRecord} that can refer to items from the "');
        $Writer.Write($this.GetLabel());
        $Writer.Write('" (');
        $Writer.Write($this.GetName());
        $Writer.WriteLine(') table.');
        $Writer.Write(' * @typedef {(');
        $Writer.Write($GlideRecordType);
        $Writer.Write(' & ');
        $Writer.Write($this.name);
        $Writer.Write('Fields)} ');
        $Writer.Write($this.name);
        $Writer.WriteLine('GlideRecord');
        $Writer.WriteLine(' */');
        $Writer.Write('declare type ');
        $Writer.Write($this.name);
        $Writer.Write('GlideRecord = ');
        $Writer.Write($GlideRecordType);
        $Writer.Write(' & ');
        $Writer.Write($this.name);
        $Writer.WriteLine('Fields;');
        $Writer.WriteLine();
        $Writer.WriteLine('/**');
        $Writer.Write(' * Type of {@link GlideElementReference} that refers to a record in the "');
        $Writer.Write($this.GetLabel());
        $Writer.Write('" (');
        $Writer.Write($this.GetName());
        $Writer.WriteLine(') table.');
        $Writer.Write(' * @typedef {$$element.Reference<');
        $Writer.Write($this.name);
        $Writer.Write('Fields, ');
        $Writer.Write($this.name);
        $Writer.Write('GlideRecord>} ');
        $Writer.Write($this.name);
        $Writer.WriteLine('GlideRecord');
        $Writer.WriteLine(' */');
        $Writer.Write('declare type ');
        $Writer.Write($this.name);
        $Writer.Write('Element = $$element.Reference<');
        $Writer.Write($this.name);
        $Writer.Write('Fields, ');
        $Writer.Write($this.name);
        $Writer.WriteLine('GlideRecord>;');
        $Writer.WriteLine();
        $Writer.WriteLine('/**');
        $Writer.Write(' * Type of {@link GlideRecord} property that refers to an item from the "');
        $Writer.Write($this.GetLabel());
        $Writer.Write('" (');
        $Writer.Write($this.GetName());
        $Writer.WriteLine(') table.');
        $Writer.Write(' * @typedef {$$property.generic.ReferenceProperty<');
        $Writer.Write($this.name);
        $Writer.Write('Fields, ');
        $Writer.Write($this.name);
        $Writer.Write('GlideRecord, ');
        $Writer.Write($this.name);
        $Writer.WriteLine('Element>} ');
        $Writer.Write($this.name);
        $Writer.WriteLine('GlideRecord');
        $Writer.WriteLine(' */');
        $Writer.Write('declare type ');
        $Writer.Write($this.name);
        $Writer.Write('Property = $$property.generic.ReferenceProperty<');
        $Writer.Write($this.name);
        $Writer.Write('Fields, ');
        $Writer.Write($this.name);
        $Writer.Write('GlideRecord, ');
        $Writer.Write($this.name);
        $Writer.WriteLine('Element>;');
        $Writer.WriteLine();
        $Writer.WriteLine('// #endregion ');
    }
}

Function Write-SysDictionaryJsType {
    [CmdletBinding()]
    Param(
        [Parameter(Mandatory = $true)]
        [System.Xml.XmlDocument]$Tables,

        [Parameter(Mandatory = $true)]
        [System.Xml.XmlDocument]$Dictionary,

        [Parameter(Mandatory = $true)]
        [System.Xml.XmlDocument]$Documentation,

        [Parameter(Mandatory = $true)]
        [System.IO.TextWriter]$Writer
    )

    Process {
        [System.Xml.XmlElement[]]$Elements = @($Tables.SelectNodes('/xml/sys_db_object'));
        if ($Elements.Length -eq 0) {
            Write-Warning -Message 'No sys_db_object elements found';
        } else {
            $sys_db_object = [SNsys_db_object]::new($Elements[0], $Dictionary, $Documentation);
            if ($sys_db_object.super_class.sys_id.Length -gt 0 -and $sys_db_object.super_class.name.Length -eq 0) {
                Write-Warning -Message "Cannot determine base type name for $($($sys_db_object.GetLabel())): Element 'super_class' on table '$($sys_db_object.GetName())' does not have a 'name' attribute.";
            } else {
                $sys_db_object.WriteTo($Writer);
            }
            if ($Elements.Length -gt 1) {
                ($Elements | Select-Object -Skip 1) | ForEach-Object {
                    $sys_db_object = [SNsys_db_object]::new($_, $Dictionary, $Documentation);
                    if ($sys_db_object.super_class.sys_id.Length -gt 0 -and $sys_db_object.super_class.name.Length -eq 0) {
                        Write-Warning -Message "Cannot determine base type name for $($($sys_db_object.GetLabel())): Element 'super_class' on table '$($sys_db_object.GetName())' does not have a 'name' attribute.";
                    } else {
                        $Writer.WriteLine();
                        $sys_db_object.WriteTo($Writer);
                    }
                }
            }
        }
    }
}

[Xml]$sys_db_object = '<xml />';
$sys_db_object.Load(($PSScriptRoot | Join-Path -ChildPath 'sys_db_object.xml'));
[Xml]$sys_dictionary = '<xml />';
$sys_dictionary.Load(($PSScriptRoot | Join-Path -ChildPath 'sys_dictionary.xml'));
[Xml]$sys_documentation = '<xml />';
$sys_documentation.Load(($PSScriptRoot | Join-Path -ChildPath 'sys_documentation.xml'));
$Writer = [System.IO.StringWriter]::new();
Write-SysDictionaryJsType -Tables $sys_db_object -Dictionary $sys_dictionary -Documentation $sys_documentation -Writer $Writer;
$Writer.ToString();
Get-TableDefinitionUrls -TableName 'x_g_inte_site_17_reservation_type';