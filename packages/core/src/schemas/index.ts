/**
 * @module @minions-proposals/sdk/schemas
 * Custom MinionType schemas for Minions Proposals.
 */

import type { MinionType } from 'minions-sdk';

export const proposaltemplateType: MinionType = {
  id: 'proposals-proposal-template',
  name: 'Proposal template',
  slug: 'proposal-template',
  description: 'A reusable proposal scaffold for a specific platform and style.',
  icon: '🖨️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'style', type: 'select', label: 'style' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'placeholders', type: 'string', label: 'placeholders' },
    { name: 'promptVersionRef', type: 'string', label: 'promptVersionRef' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const proposaldraftType: MinionType = {
  id: 'proposals-proposal-draft',
  name: 'Proposal draft',
  slug: 'proposal-draft',
  description: 'A generated proposal for a specific job, with scoring and status.',
  icon: '✍️',
  schema: [
    { name: 'jobId', type: 'string', label: 'jobId' },
    { name: 'templateId', type: 'string', label: 'templateId' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'answerSet', type: 'string', label: 'answerSet' },
    { name: 'promptVersionRef', type: 'string', label: 'promptVersionRef' },
    { name: 'clarityScore', type: 'number', label: 'clarityScore' },
    { name: 'relevanceScore', type: 'number', label: 'relevanceScore' },
    { name: 'specificityScore', type: 'number', label: 'specificityScore' },
    { name: 'complianceScore', type: 'number', label: 'complianceScore' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'revisedAt', type: 'string', label: 'revisedAt' },
  ],
};

export const proposalrevisionType: MinionType = {
  id: 'proposals-proposal-revision',
  name: 'Proposal revision',
  slug: 'proposal-revision',
  description: 'A previous version of a proposal draft saved before revision.',
  icon: '📜',
  schema: [
    { name: 'proposalId', type: 'string', label: 'proposalId' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'savedAt', type: 'string', label: 'savedAt' },
    { name: 'changeReason', type: 'string', label: 'changeReason' },
  ],
};

export const answersetType: MinionType = {
  id: 'proposals-answer-set',
  name: 'Answer set',
  slug: 'answer-set',
  description: 'A set of platform screening question answers for a specific proposal.',
  icon: '❓',
  schema: [
    { name: 'proposalId', type: 'string', label: 'proposalId' },
    { name: 'jobId', type: 'string', label: 'jobId' },
    { name: 'questions', type: 'string', label: 'questions' },
    { name: 'answers', type: 'string', label: 'answers' },
    { name: 'generatedAt', type: 'string', label: 'generatedAt' },
  ],
};

export const customTypes: MinionType[] = [
  proposaltemplateType,
  proposaldraftType,
  proposalrevisionType,
  answersetType,
];

