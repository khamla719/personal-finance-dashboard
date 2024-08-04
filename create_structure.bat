@echo off

:: Create main directories
mkdir src\components src\layouts src\pages src\utils src\contexts src\hooks

:: Create component subdirectories
cd src\components
mkdir Header Sidebar Overview SpendingHabits SavingsGoals InvestmentPortfolio Footer

:: Create placeholder files
type nul > Header\Header.js
type nul > Header\Header.css
type nul > Sidebar\Sidebar.js
type nul > Sidebar\Sidebar.css
type nul > Overview\Overview.js
type nul > Overview\Overview.css
type nul > SpendingHabits\SpendingHabits.js
type nul > SpendingHabits\SpendingHabits.css
type nul > SavingsGoals\SavingsGoals.js
type nul > SavingsGoals\SavingsGoals.css
type nul > InvestmentPortfolio\InvestmentPortfolio.js
type nul > InvestmentPortfolio\InvestmentPortfolio.css
type nul > Footer\Footer.js
type nul > Footer\Footer.css

:: Create layout file
cd ..\layouts
type nul > DashboardLayout.js

:: Create page files
cd ..\pages
type nul > Dashboard.js
type nul > Spending.js
type nul > Savings.js
type nul > Investments.js
type nul > Settings.js

:: Create utility files
cd ..\utils
type nul > api.js
type nul > helpers.js

:: Create context file
cd ..\contexts
type nul > UserContext.js

:: Create custom hook file
cd ..\hooks
type nul > useFinanceData.js

cd ..\..

echo Folder structure created successfully!
pause