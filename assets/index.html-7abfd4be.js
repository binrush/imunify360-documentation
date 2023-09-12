import{_ as n,V as o,n as a,p as s,q as r,J as e,C as l,A as c,a7 as t}from"./framework-5767e03f.js";const d="/images/owner_UI_protection_disabled.png",u="/images/owner_UI_protection_disabled_pd.png",h="/images/myimunify_whmcs_addons_menu.png",p="/images/configurable_options_myimunify_group.png",m="/images/managegroup_myimunifyhosting.png",g="/images/configurable_options_edit_price.png",f="/images/configurable_options_create_new_group.png",y="/images/configurable_options_create_new_group_details.png",b="/images/configurable_options_add_new.png",w="/images/configurable_options_awp_on_off.png",_="/images/whmcs_cloudlinux_advantages_menu.png",v="/images/whmcs_push_info_window_cladvantages.png",I="/images/imunify360_settings_myimunify.png",M="/images/whmcs_list_orders.png",x="/images/whmcs_accepting_orders.png",C="/images/cpanel_search_imunify360.png",S="/images/myimuinfy_ui_end_user.png",k="/images/whmcs_client_upgrade_downgrade.png",P="/images/whmcs_client_upgrade_downgrade_2.png",O="/images/myimunify_malicious_tab.png",A="/images/myimunify_proactive_tab.png",H={},W=t('<h1 id="myimunify-user-documentation" tabindex="-1"><a class="header-anchor" href="#myimunify-user-documentation" aria-hidden="true">#</a> MyImunify User Documentation</h1><h2 id="hosting-administrator" tabindex="-1"><a class="header-anchor" href="#hosting-administrator" aria-hidden="true">#</a> Hosting Administrator</h2><h3 id="what-is-myimunify-for-hosting-admin" tabindex="-1"><a class="header-anchor" href="#what-is-myimunify-for-hosting-admin" aria-hidden="true">#</a> What is MyImunify (for hosting admin)?</h3><p>It is a feature of Imunify360 included in the disabled-by-default state always. With MyImunify enabled, the Imunify360 service changes its protection behavior.</p>',4),q=t('<p>In the MyImunify Protection disabled mode, Imunify360 will still scan users&#39; directories, show found malware inside the UI, and also notify users about the detected malware if possible, proposing to purchase MyImunify protection via the hosting company billing system.</p><h4 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h4><ul><li>Imunify360</li><li>CloudLinux OS Shared Pro</li><li>WHMCS</li><li><a href="https://docs.cloudlinux.com/cln/whmcs_advantage/#installation-and-configuration" target="_blank" rel="noopener noreferrer">CloudLinuxAdvantages</a> WHMCS plugin needs to be installed</li></ul><h4 id="what-features-will-be-enabled-disabled-when-i-turn-myimunify-on" tabindex="-1"><a class="header-anchor" href="#what-features-will-be-enabled-disabled-when-i-turn-myimunify-on" aria-hidden="true">#</a> What features will be enabled/disabled when I turn MyImunify on?</h4><p>The following features are present and fully functioning <strong>regardless of the MyImunify Status</strong>.</p><ul><li>Advanced firewall with cloud heuristics and artificial intelligence for detecting new threats and protecting all servers that run the software - capable of defending against brute force attacks, DoS attacks, and port scans.</li><li>Intrusion Detection and Protection System - a comprehensive collection of “deny” policy rules for blocking all known attacks.</li><li>Patch Management - rebootless Secure Kernel powered by KernelCare keeps the server secure by automatically patching kernels without having to reboot the server.</li><li>Website Reputation Monitoring - analyzing if websites or IPs are blocked by any blacklists and notifying if they are.</li></ul><p>The features whose <strong>behavior is changed when MyImunify is enabled</strong>.</p><ul><li><p>Malware Scanning - automatic scanning of file systems for malware injection and cleaning up infected files.</p><ul><li>When MyImunify is enabled on the server, Imunify360 will continue to scan the user’s home directories finding malware scripts and viruses, however, users with MyImunify Protection Disabled will not be able to clean up files using Imunify360. They will either need to clean up files themselves or purchase complete protection from the hosting company.</li><li>At the same time, a hosting administrator still be able to clean up files if needed.</li></ul></li><li><p>Account owner&#39;s UI when Protection is Disabled (Malicious Tab):</p></li></ul><p><img src="'+d+'" alt=""></p><ul><li><p>Proactive Defense - Proactive Defense protects websites running PHP, against zero-day attacks by blocking potentially malicious executions automatically and with zero latency.</p><ul><li>When MyImunify is enabled, Proactive Defense will Log only suspicious events for all the users who haven’t yet had MyImunify Protection Enabled mode.</li><li>Once MyImunify is enabled, Proactive Defense will automatically enabled into Kill Mode unless it is disabled on the server.</li></ul></li><li><p>Account’s owner’s UI when Protection is Disabled (Proactive Defence tab):</p></li></ul><p><img src="'+u+'" alt=""></p><h3 id="how-to-enable-myimunify" tabindex="-1"><a class="header-anchor" href="#how-to-enable-myimunify" aria-hidden="true">#</a> How to enable MyImunify</h3><h4 id="configuring-the-billing-system-whmcs-side" tabindex="-1"><a class="header-anchor" href="#configuring-the-billing-system-whmcs-side" aria-hidden="true">#</a> Configuring the billing system (WHMCS) side</h4><p>Install the CloudLinux Advantages plugin if you don’t have it yet. Once installed check presence in <strong>WHMCS -&gt; Addons</strong> menu.</p><p><img src="'+h+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title"></p><p>Don’t forget to add your server under WHMCS management: <strong>System -&gt; Settings -&gt; Servers -&gt; Add New Server</strong>. Refer to <a href="https://docs.whmcs.com/Servers#Add_a_Server" target="_blank" rel="noopener noreferrer">https://docs.whmcs.com/Servers#Add_a_Server</a>.</p></div><h4 id="adding-a-new-configurable-option-to-a-hosting-plan" tabindex="-1"><a class="header-anchor" href="#adding-a-new-configurable-option-to-a-hosting-plan" aria-hidden="true">#</a> Adding a new Configurable option to a hosting plan</h4><ol><li>Go to <strong>WHMCS System Settings -&gt; Configurable Options</strong>, select the <strong>MyImunify</strong> Group, and edit it.</li></ol><p><img src="'+p+'" alt=""></p><ol start="2"><li><strong>my_imunify_hosting</strong> needs to be assigned to the hosting plans. Select <strong>linceses - my_imunify_hosting</strong> and your hosting configuration together in the Assiged Product list (<code>Shift+click</code>).</li></ol><p><img src="'+m+'" alt=""></p><ol start="3"><li>Edit the price for the configurable option <strong>MyImunify – Account Protection</strong>. For more info, visit <a href="https://docs.whmcs.com/Configurable_Options" target="_blank" rel="noopener noreferrer">https://docs.whmcs.com/Configurable_Options</a>.</li></ol><p><img src="'+g+'" alt=""></p><h4 id="enabling-myimunify-for-existing-users-by-default" tabindex="-1"><a class="header-anchor" href="#enabling-myimunify-for-existing-users-by-default" aria-hidden="true">#</a> Enabling MyImunify for existing users by default</h4><p>In case a hosting company wants to enable MyImunify on a server that already has Imunify360 installed avoid existing users getting no protection users, but at the same time make new users purchase protection on demand, then WHMCS administrator will need to configure two different hosting plans:</p><ul><li>The first plan will have MyImunify enabled by default at no cost, so existing users will see no change in the protection.</li><li>The second plan will have the MyImunify configurable option off by default, so it can be assigned to new users to allow them to purchase it on demand.</li></ul><p>Here is how to configure an existing hosting plan by WHMCS administrator to enable MyImunify Protection Enabled at no additional cost.</p><ol><li>Go to Settings -&gt; Configurable Options Groups -&gt; Create New Group:</li></ol><p><img src="'+f+'" alt=""></p><ol start="2"><li>Create a new group with a distinct name and assign it to your existing product/plan:</li></ol><p><img src="'+y+'" alt=""></p><ol start="3"><li>Add a new configurable option to the group and press “Add New Configurable Option”:</li></ol><p><img src="'+b+'" alt=""></p><ol start="4"><li><p>Fill in the option name field. It is important for the option to start with <code>my_imunify_account_protection|</code> (don’t forget <code>|</code> at the end).</p></li><li><p>Then add the option <code>awp_on|On</code>. Use <code>awp_on|</code> as a prefix, the rest is the text that a user will see.</p><ul><li>To avoid inflicting additional costs, the price line needs to be filled with 0.00. The Order value must be set to “1”.</li><li>It is also possible to add an <code>awp_off|</code> option here to allow the users to disable protection. In this case, the Order field must have a value “2”.</li></ul></li></ol><p><img src="'+w+'" alt=""></p><p><strong>Confirming the changes</strong></p><ol><li><p>To check if the Configurable option is assigned to the hosting plan, see “Settings -&gt; Product Services -&gt; Select your hosting plan -&gt; Configurable options”. Make sure that the created Configurable Option is assigned to the needed hosting plan.</p></li><li><p>Once it is done, it is required to sync changes to the existing servers. In order to do so select “Addons -&gt; CloudLinuxAdvantages”</p></li></ol><p><img src="'+_+'" alt=""></p><p>There is an area called <strong>Configurable option status</strong>. Your new option will appear here, preceded by the &quot;PUSH&quot; button. The button needs to be pressed in order to sync changes with the existing hosting plan to your servers. Once pressed it will show the list of servers and users where the &quot;Configurable option&quot; change will be propagated. Press “Send Changes” if everything is ok.</p><p><img src="'+v+'" alt=""></p><p>Now you have to configure your new hosting plan for the users who will need to purchase protection on demand.</p><h4 id="configuring-the-imunify360-side" tabindex="-1"><a class="header-anchor" href="#configuring-the-imunify360-side" aria-hidden="true">#</a> Configuring the Imunify360 side</h4><ol><li>Configuration of MyImunify on the Imunify360 side is pretty easy. Navigate to the <strong>Imunify360 -&gt; Settings -&gt; General -&gt; MyImunify</strong> section.</li><li>Click “<strong>Resell MyImunify package to site owners</strong>” and specify the billing system (WHMCS) hostname. If your system is running on the port other than standard HTTPS port (443), specify it as well e.g. <code>whmcs.example.com:8443</code>. Don’t forget to hit the <code>Save Changes</code> button.</li></ol><p><img src="'+I+'" alt=""></p><h3 id="approving-orders" tabindex="-1"><a class="header-anchor" href="#approving-orders" aria-hidden="true">#</a> Approving Orders</h3><p>By default, every purchase of a configurable option creates an order that needs to be accepted.</p><ol><li>Select <strong>Orders -&gt; List Orders</strong>:</li></ol><p><img src="'+M+'" alt=""></p><ol start="2"><li>Select pending orders and accept them.</li></ol><p><img src="'+x+'" alt=""></p><h2 id="account-owner" tabindex="-1"><a class="header-anchor" href="#account-owner" aria-hidden="true">#</a> Account Owner</h2><h3 id="what-is-myimunify-for-an-account-site-owner" tabindex="-1"><a class="header-anchor" href="#what-is-myimunify-for-an-account-site-owner" aria-hidden="true">#</a> What is MyImunify (for an account/site owner)?</h3><p>MyImunify - your comprehensive web security solution. In today&#39;s digital landscape, the importance of robust web security cannot be understated. MyImunify provides an integrated solution for website owners keen on ensuring maximum protection. Here are the essentials of what MyImunify offers:</p><ul><li><p><strong>Automated Malware Management</strong>: MyImunify automatically scans file systems for traces of malware, swiftly identifying and cleaning infected files. This not only maintains the integrity of your website but also significantly reduces the administrative efforts required in manual malware detection and removal.</p></li><li><p><strong>Proactive Defense</strong>: With a vast majority of websites running PHP, it becomes crucial to guard them against not just known threats, but also potential zero-day attacks. MyImunify&#39;s Proactive Defense feature is designed to achieve this by blocking potentially malicious executions in real time, ensuring your website operates securely without latency issues.</p></li></ul><p>By integrating MyImunify, you equip your website with a cutting-edge protective layer that is both efficient and unobtrusive. It is a prudent choice for those prioritizing digital safety.</p><h4 id="where-myimunify-is-located" tabindex="-1"><a class="header-anchor" href="#where-myimunify-is-located" aria-hidden="true">#</a> Where MyImunify is located?</h4><ol><li>Log into your hosting account control panel (cPanel) and find Imunify360 in the Security section (or use a search tool for &quot;Imunify360&quot;).</li></ol><p><img src="'+C+'" alt=""></p><ol start="2"><li>Open Imunify360.</li></ol><p><img src="'+S+'" alt=""></p><p>On the screenshot, you can see an example of an account with malware detected.</p><p>MyImunify automatically scans the account’s home and website directories and finds malware and other suspicious files. Once malware is detected, it is time to remove it. Site administrators can either remove it manually or press the &quot;Get Protected&quot; button to enable MyImunify protection.</p><h3 id="myimunify-protection-enabled-mode" tabindex="-1"><a class="header-anchor" href="#myimunify-protection-enabled-mode" aria-hidden="true">#</a> MyImunify Protection enabled mode</h3><p>Once a user clicks on the <code>Get Protected</code> button, he/she will be navigated to the WHMCS Client Area &quot;Upgrade/Downgrade&quot; page with the preselected configurable option “MyImunify - Account protection”.</p><ol><li>Click on &quot;New Configuration&quot;, select “On” and complete the purchase:</li></ol><p><img src="'+k+'" alt=""></p><ol start="2"><li>Here the user needs to select New Conifugation “On”:</li></ol><p><img src="'+P+'" alt=""></p><h4 id="using-myimunify-protection-enabled" tabindex="-1"><a class="header-anchor" href="#using-myimunify-protection-enabled" aria-hidden="true">#</a> Using MyImunify Protection Enabled</h4><p>Once the purchase is completed, the Imunify360 plugin will be turned into the MyImunify Protection Enabled mode.</p><p>MyImunify Protection is completely automated. It takes the burden of scanning and cleaning off a user. However, it might be useful to press “Clean up all” once MyImunify Protection is enabled to expedite malware cleanup.</p><p><img src="'+O+'" alt=""></p><p>Users can either see the results of real-time malware scans, clean up malware if needed and use Proactive Defense in “Kill mode”, stopping unknown types of malware. Below is the Proactive Defense in the “Kill mode” demostrated:</p><p><img src="'+A+'" alt=""></p>',74);function D(T,N){const i=o("RouterLink");return a(),s("div",null,[W,r("p",null,[e("When enabled, Imunify360 will still protect the server against all known network attacks but with the malware cleanup disabled for users’ home directories and the "),l(i,{to:"/dashboard/#proactive-defense"},{default:c(()=>[e("Proactive Defense feature")]),_:1}),e(" in the Log Mode by default.")]),q])}const L=n(H,[["render",D],["__file","index.html.vue"]]);export{L as default};
