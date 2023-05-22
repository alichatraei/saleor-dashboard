# Table of Contents

- [General Information](#general-info)
- [Capabilities & Features](#capabilities-features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Province Folder Structure](#folder-structure)

## General Information

It is a demo dashboard project that calls the Saleor admin dashboard panel.
This Project is a demo dashboard that adds new Province's routes.
It adds cities to specific provinces, But for now, it's mock and add city locally.

## Capabilities & Features

We have five operations on this route:

- Add a new city to the selected Province
- Edit specific city
- Delete specific city
- Delete Province
- Search Province by a search bar
  Each of the levels and operations manages by the [Context hook](https://react.dev/reference/react/useContext) in React.

## Prerequisites

- Node.js v18+
- A running instance of [Saleor](https://github.com/saleor/saleor/)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/saleor/saleor-dashboard.git
```

2. Enter the project directory:

```bash
cd saleor-dashboard
```

3. Install the dependencies:

```bash
npm i
```

4. Configure the env vars as described in [docs/configuration.md](docs/configuration.md).

5. Start the development server with:

```bash
npm run dev
```

> Note:
> If you see CORS errors, check [CORS configuration](https://docs.saleor.io/docs/3.x/developer/running-saleor/configuration#allowed_client_hosts) of your Saleor instance or CORS settings in the Cloud Console.

## Province Folder Structure

Province directory layout:

```bash
   ├── components                 # Components folders
   ├── context                    # Context files
   ├── enum                       # Enum files
   ├── helpers                    # Helpers functions
   ├── hooks                      # Custom hooks
   ├── interface                  # Custom Interfaces
   ├── types                      # Custom Types
   ├── utils                      # Mock data
   ├── index.tsx                  # Base Component file
   └── url.ts                     # URLs
```

I will explain each folder in other sections.

## Components folder

I make route components in this folder, such as Modals, AccordionContainer, AccordionChildren, ProvinceListPage.

### AccordionContainer component

This component is for accordion container that render list of the provinces.
Also it contains its own component and its styles:

```bash
    ├── AccordionContainer.tsx       # Accordion Component
    └── styles.ts                    # Custom Styles
```

### AccordionChildren component

This component is for accordion childrens that render list of the provinces's cities.
Also it contains its own component and its styles

```bash
    ├── AccordionChildren.tsx        # AccordionChildren Component
    └── styles.ts                    # Custom Styles
```

### AddCityModal component

This component is for add new city modal to selected province.
Also it contains its own modal component and its styles

```bash
    ├── AddCityModal.tsx             # AddCityModal Component
    └── styles.ts                    # Custom Styles
```

### DeleteCityModal component

This component is for delete city modal from selected province.
Also it contains its own modal component and its styles

```bash
    ├── DeleteCityModal.tsx          # DeleteCityModal Component
    └── styles.ts                    # Custom Styles
```

### EditCityModal component

This component is for edit city modal.
Also it contains its own modal component and its styles

```bash
    ├── EditCityModal.tsx            # EditCityModal Component
    └── styles.ts                    # Custom Styles
```

### EditProvinceModal component

This component is for edit province modal.
Also it contains its own modal component and its styles

```bash
    ├── EditProvinceModal.tsx        # EditProvinceModal Component
    └── styles.ts                    # Custom Styles
```

### ModalManager component

This component is use for import all modals and define which modal should be open or close by state.

```bash
    └── ModalManager.tsx             # ModalManager Component
```

### ModalWrapper component

This component is use for render Modals into specific HTML element with [ReactDOM.createPortal](https://react.dev/reference/react-dom/createPortal) method.

```bash
    └── ModalWrapper.tsx             # ModalWrapper Component
```

### ProvincesListPage component

This component is route page and render all children elements its has.

```bash
    └── ProvincesListPage.tsx             # ProvincesListPage Component
```
