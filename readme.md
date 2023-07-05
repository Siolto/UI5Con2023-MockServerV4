# UI5Con 2023 - MockServer v4

This repository contains the relevant content of the presentation about the **MockServer for OData v4 Applications** on the UI5Con 2023 in St.Leon Germany

## Steps to implement the MockServer

1. Add the mockserver as a development dependency to your project. Thanks to the UI5-Tooling v3 we don't have to add the middleware to the ui5 dependencies anymore

```shell
npm i -D @sap-ux/ui5-middleware-fe-mockserver
```

2. Add the configuration for the mockserver to the `ui5.yaml`.

``` yaml
server:
  customMiddleware:
    - name: sap-fe-mockserver
      beforeMiddleware: compression
      configuration:
        service:
          urlBasePath: "/path/to/service"
          metadataXmlPath: "./path/to/metadata.xml"
          mockdataRootPath: "./path/to/mockdata"
          generateMockData: true
```

3. Restart the application and check that the mockserver is working.