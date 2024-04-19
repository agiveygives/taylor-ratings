import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type SettingsType = {
  taylorsVersionOnly: boolean;
}

type UpdateSettingsType = {
  taylorsVersionOnly?: boolean;
}

const defaultSettings: SettingsType = {
  taylorsVersionOnly: true,
}

function createSettings() {
	const { subscribe, set, update } = writable(defaultSettings);

	const updateSettings = (newSettings: UpdateSettingsType) => update((settings) => {
    console.log('settings', { ...settings, ...newSettings });
		return { ...settings, ...newSettings };
	});

	return {
		subscribe,
		update: updateSettings,
		reset: () => set(defaultSettings),
		set,
	};
}

export const settings = createSettings();

// Initialize the store from localStorage
if (browser) {
	const storedData = localStorage.getItem('settings');
	if (storedData) {
			settings.set(JSON.parse(storedData));
	}

	// Subscribe to changes and update localStorage
	settings.subscribe(value => {
			localStorage.setItem('settings', JSON.stringify(value));
	});
}
