import posthog from 'posthog-js';

let isInitialized = false;

export function usePostHog() {
  if (typeof window === 'undefined') {
    return { posthog: null };
  }

  if (!isInitialized) {
    posthog.init('phc_yoHWrDfCMhBwLFbT6ukKibtPq7w9F53EISZWtaKhOHJ', {
      api_host: 'https://eu.i.posthog.com',
      defaults: '2025-05-24',
      person_profiles: 'identified_only',
    });
    isInitialized = true;
  }

  return { posthog };
}
