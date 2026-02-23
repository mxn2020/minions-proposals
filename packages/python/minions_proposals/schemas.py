"""
Minions Proposals SDK — Type Schemas
Custom MinionType schemas for Minions Proposals.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

proposal_template_type = MinionType(
    id="proposals-proposal-template",
    name="Proposal template",
    slug="proposal-template",
    description="A reusable proposal scaffold for a specific platform and style.",
    icon="🖨️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="style", type="select", label="style"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="placeholders", type="string", label="placeholders"),
        FieldDefinition(name="promptVersionRef", type="string", label="promptVersionRef"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

proposal_draft_type = MinionType(
    id="proposals-proposal-draft",
    name="Proposal draft",
    slug="proposal-draft",
    description="A generated proposal for a specific job, with scoring and status.",
    icon="✍️",
    schema=[
        FieldDefinition(name="jobId", type="string", label="jobId"),
        FieldDefinition(name="templateId", type="string", label="templateId"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="answerSet", type="string", label="answerSet"),
        FieldDefinition(name="promptVersionRef", type="string", label="promptVersionRef"),
        FieldDefinition(name="clarityScore", type="number", label="clarityScore"),
        FieldDefinition(name="relevanceScore", type="number", label="relevanceScore"),
        FieldDefinition(name="specificityScore", type="number", label="specificityScore"),
        FieldDefinition(name="complianceScore", type="number", label="complianceScore"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="revisedAt", type="string", label="revisedAt"),
    ],
)

proposal_revision_type = MinionType(
    id="proposals-proposal-revision",
    name="Proposal revision",
    slug="proposal-revision",
    description="A previous version of a proposal draft saved before revision.",
    icon="📜",
    schema=[
        FieldDefinition(name="proposalId", type="string", label="proposalId"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="savedAt", type="string", label="savedAt"),
        FieldDefinition(name="changeReason", type="string", label="changeReason"),
    ],
)

answer_set_type = MinionType(
    id="proposals-answer-set",
    name="Answer set",
    slug="answer-set",
    description="A set of platform screening question answers for a specific proposal.",
    icon="❓",
    schema=[
        FieldDefinition(name="proposalId", type="string", label="proposalId"),
        FieldDefinition(name="jobId", type="string", label="jobId"),
        FieldDefinition(name="questions", type="string", label="questions"),
        FieldDefinition(name="answers", type="string", label="answers"),
        FieldDefinition(name="generatedAt", type="string", label="generatedAt"),
    ],
)

custom_types: list[MinionType] = [
    proposal_template_type,
    proposal_draft_type,
    proposal_revision_type,
    answer_set_type,
]

