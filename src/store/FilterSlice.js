import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../assets/Mock Data";

const initialState = {
    Components: [
        {
            name: "Ad Network",
            options: [
                "Meta",
                "Google Ads",
            ]
        },
        {
            name: "Ad Group",
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
            name: "Campaign",
            options: [
                "CryptoTrust SG",
                "LearnPro India",
                "French Feast",
                "BattleZone Launch",
                "Flash USA",

                "NY2025",
                "Black Friday UK",
                "FitLife Launch",
                "Monsoon Vibes",
                "Summer Splash 2025"
            ]
        },
        {
            name: "OS",
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
    Metrics: ['Cost per Install (CPI)', 'Installs per Thousand Impressions (IPM)', 'Click Through Rate (CTR)', 'Cost Per Thousand Impressions (CPM)', 'Cost Per Click (CPC)'],
    AddedFilter: [],
    dropStatus: false,
     activeTab: 'Components', 
    mockData,
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
            const { componentName, value } = action.payload;

            const isAlreadyAdded = state.AddedFilter.some(
                (item) => item.componentName === componentName && item.value === value
            );
            if (!isAlreadyAdded) {
                state.AddedFilter.push({ componentName, value });
            }

            state.dropStatus = false;
        }
        ,
        clearAllFilters: (state) => {
            state.AddedFilter = [];
        },
    },
});

export const { deleteFilter, toogleDropDown, addFilter, clearAllFilters } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


