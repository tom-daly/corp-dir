<?xml version="1.0" encoding="utf-8"?>
<feature xmlns:dm0="http://schemas.microsoft.com/VisualStudio/2008/DslTools/Core" dslVersion="1.0.0.0" Id="5947aa42-c87a-4716-91ec-c3ce7508c628" description="This feature contains the Corporate Directory Control Web Part along with all the necessary javascript, images, &amp; css file that support it." featureId="5947aa42-c87a-4716-91ec-c3ce7508c628" imageUrl="" imageAltText="[corp-dir-feature-logo]" solutionId="00000000-0000-0000-0000-000000000000" title="Corporate Directory Feature" version="" deploymentPath="$SharePoint.Project.FileNameWithoutExtension$_$SharePoint.Feature.FileNameWithoutExtension$" xmlns="http://schemas.microsoft.com/VisualStudio/2008/SharePointTools/FeatureModel">
  <activationDependencies>
    <customFeatureActivationDependency minimumVersion="" featureTitle="Search Server Web Parts and Templates" featureDescription="This feature will add the Search Server Web Parts and Display Templates to your site. Search will work on most sites without this feature being activated, but if you get a message about missing templates when searching, then activate this feature." featureId="9c0834e1-ba47-4d49-812b-7d4fb6fea211" solutionId="00000000-0000-0000-0000-000000000000" solutionUrl="" />
  </activationDependencies>
  <projectItems>
    <projectItemReference itemId="fecce85b-bfcf-4ac4-b4cc-2ac8ffd3166c" />
    <projectItemReference itemId="64fdccbd-95c9-42ee-ae5f-5974dce53f7f" />
    <projectItemReference itemId="c05f1897-3d66-4db5-bcfc-96d01529bc66" />
  </projectItems>
</feature>