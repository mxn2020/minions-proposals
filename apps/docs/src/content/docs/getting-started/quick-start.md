---
title: Quick Start
description: Get up and running with Minions Proposals in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-proposals/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_proposals import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
proposals info
```
