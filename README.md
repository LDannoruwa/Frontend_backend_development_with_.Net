# Folder Structure

The workspace contains two folders by where:
 - frontend : contains source related to frontend development using Angular JS
 - backend : contains source related to frontend development using ASP.NET Web API

# Getting Started
## Prerequisites
  -  Visual Studio https://visualstudio.microsoft.com/
  -  SQL Server Management Studio (SSMS)  https://shorturl.at/iorzV
  -  VsCode https://code.visualstudio.com
  -  Angular CLI https://angular.io/
  -  Bootstrap https://getbootstrap.com/
    
## Installation

 1. Clone the repository:

    `https://github.com/LDannoruwa/Frontend_backend_development_with_.Net`

 2. Add .NET dependencies (Microsoft.EntityFrameworkCore.SqlServer, Microsoft.EntityFrameworkCore.Tools) to the backend project.
 3. configure connection string for SQL Server by overriding OnConfiguring method using DbContext.cs file in the /Data folder.
 4. Run C# project or .csproj file in /backend/BackendApi/ BackendApi
 5. Check API requests (GET, POST, PUT, DELETE) using SWAGGER API documentation tool.
 6. Install Node.js https://nodejs.org/en
 7. Install the Angular CLI (Angular CLI: 16.2.1) https://angular.io/guide/setup-local
 8. Run Angular JS frontend.
    
      `ng serve --open`
       
 9. Click Sighting tab on the navigation bar of the application to start basic functions of the web application.

# Screenshots
 1. Click Sighting tab on the navigation bar of the application to start basic functions of the web application.
    
![1](https://github.com/LDannoruwa/Frontend_backend_development_with_.Net/assets/53103313/f3ff021d-6465-4afe-a287-723bc2ffa120)

 2. Click "Add" button on the "Sighting list" page to add a new record to the system.
    
![2](https://github.com/LDannoruwa/Frontend_backend_development_with_.Net/assets/53103313/261452b0-a5fa-457f-bfe8-ed83276b0a5b)

3. Click "submit" button on the add "Sighting page" to submit a new record to the system. After that, web page will be navigated to the "Sighting list" page.
   
![3](https://github.com/LDannoruwa/Frontend_backend_development_with_.Net/assets/53103313/429df737-6dfe-40fd-8706-485ae36b817c)

4. The newly added record can be viewed on the sighting list page.

![4](https://github.com/LDannoruwa/Frontend_backend_development_with_.Net/assets/53103313/b43e6ee2-f3ca-406d-9bce-09f2079c88ae)

5. The details of a single record can be viewed on the "Details of sighting" page. In addition to that, details of a single record can be updated here.

![5](https://github.com/LDannoruwa/Frontend_backend_development_with_.Net/assets/53103313/4c466240-e1a8-456d-900f-4697b0a0d063)

6. All record can be filtered based on "Make", "Model" or "Registration"
   
![6](https://github.com/LDannoruwa/Frontend_backend_development_with_.Net/assets/53103313/05210600-02ce-45a8-9361-b6183fdca481)






