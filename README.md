# Corporate Directory Controls for SharePoint 2013/2016 & Office 365
This is a corporate directory type control for SharePoint 2013/2016 &amp; Office 365

This project is a Visual Studio 2013 Project that creates a SharePoint 2013/2016 & Office 365 *NO CODE* Sandbox Solution. This solution can be deployed and activated to enable the Corporate Directory infrastruture. There is a Custom Corporate Directory controls web part that can be added to the people search results page. By adding this control you will be able to filter by last name by clicking a letter in the top row. The control can also be customized by an Admin to select any color of button/hover combination using the color pickers in the configuration panel.

<B>Update: 11/29/2016</B> - if you've downloaded this prior to this date you need to complete the following steps in order to upgrade.
1) delete the solution
2) delete the web part from the gallery
3) delete the web part from the search page
4) install the new solution
5) activate the new solution
6) add the new web part to the search page

<h1>Table of Contents</h1>
<ul>
<li><a href="#getting-started">Getting Started</a></li>
</ul>

<h1 name="getting-started">Gettin Started</h1>
Pre-Requisites 
<ul>
<li>Site Collection Admin Rights</li>
  <li>
    <div>Enterprise Search Center - this template has a people search component which we will use for the corporate directory.
    </div>
    <div><img width="400px" src='http://thomasdaly.net/wp-content/uploads/2016/12/ent-search-center.png'/></div>
  </li>
</ul>

<b>Step 1:</b> download the .WSP from here -> <a href='https://github.com/tom-daly/corp-dir/blob/master/WSP/CorpDir.SharePoint.wsp'>https://github.com/tom-daly/corp-dir/blob/master/WSP/CorpDir.SharePoint.wsp</a>
Click the 'Download' button
<div>
<img src='http://thomasdaly.net/wp-content/uploads/2016/12/download-corp-dir.png'/>
</div>

<b>Step 2:</b> Navigate to the Enterprise Search Center
<div>
<img src='http://thomasdaly.net/wp-content/uploads/2016/12/search-center-site.png'/>
</div>

<b>Step 3:</b> Click on the Gear -> Site Settings
<div>
<img src='http://thomasdaly.net/wp-content/uploads/2016/12/step3.png'/>
</div>

<b>Step 4:</b> Click 'Solutions'
<div>
<img src='http://thomasdaly.net/wp-content/uploads/2016/12/step4.png'/>
</div>

<b>Step 5:</b> Click 'Upload Solution'
<div>
<img src='http://thomasdaly.net/wp-content/uploads/2016/12/step5.png'/>
</div>

<b>Step 6:</b> Click 'Browse' and location the .WSP that you've downloaded previously, then click 'OK'

<b>Step 7:</b>Click 'Activate'
<div>
<img src='http://thomasdaly.net/wp-content/uploads/2016/12/step7.png'/>
</div>

