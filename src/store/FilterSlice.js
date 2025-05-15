import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../assets/Mock Data";

const initialState = {
    Components: [
        {
            name: "Ad Network",
            keyName: "ad_network",
            options: [
                "Meta",
                "Google Ads",
            ]
        },
        {
            name: "Ad Group",
            keyName: "Ad_Group",
            options: [
                "US-iOS-Group1",
                "IN-Android-Audio",
                "CA-Android-Fit",
                "UK-iOS-Deals",
                "DE-Android-Countdown",

                "US-iOS-Flash",
                "JP-Android-Gamers",
                "FR-iOS-Meal",
                "IN-Android-Edu",
                "SG-iOS-Fintech"
            ]
        },
        {
            name: "Country",
            keyName: "country",
            options: [
                "United States",
                "India",
                "Canada",
                "Germany",
                "United Kingdom",
                "Japan",
                "Singapore",
                "France",
                "Australia",
                "Philippines",
                "South Africa",
                "South Korea"
            ]
        },
        {
            name: "OS",
            keyName: "os",
            options: [
                "iOS",
                "Android",
                "Windows",
                "macOS",
                "Linux",
                "HarmonyOS",
                "Fire OS"
            ]
        }
    ],

    Tags: ["app",
        "banner",
        "battle",
        "blackfriday",
        "countdown",
        "crypto",
        "deal",
        "delivery",
        "discount",
        "education",
        "event",
        "finance",
        "fitness",
        "flash",
        "food",
        "gaming",
        "health",
        "learning",
        "monsoon",
        "music",
        "newyear",
        "promo",
        "reel",
        "sale",
        "summer",
        "trailer",
        "video",
        "wallet"],
    AddedFilter: [],
    dropStatus: false,
    activeTab: 'Components',
    mockData,
    dataCount: null,
};

export const FilterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        toogleDropDown: (state) => {
            state.dropStatus = !state.dropStatus
        },
        deleteFilter: (state, action) => {
            const { componentName, value } = action.payload;
            state.AddedFilter = state.AddedFilter.filter(
                item => !(item.componentName === componentName && item.value === value)
            );
        }
        ,
        addFilter: (state, action) => {
            const { componentName, value, id } = action.payload;

            const isAlreadyAdded = state.AddedFilter.some(
                (item) => item.componentName === componentName && item.value === value
            );

            if (!isAlreadyAdded) {
                state.AddedFilter.push({ componentName, value, id, });

            }

            state.dropStatus = false;
        }
        ,
        clearAllFilters: (state) => {
            state.AddedFilter = [];
        },
        setDataCount: (state, action) => {
            state.dataCount = action.payload;
        }

    },
});

export const { deleteFilter, toogleDropDown, addFilter, clearAllFilters, clearPopupMessage, setDataCount } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


