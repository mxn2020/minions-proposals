/**
 * Minions Proposals SDK
 *
 * Proposal drafts, answer sets, scoring, and prompt version references
 *
 * @module @minions-proposals/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Proposals.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
