import { SlashCommandConfigurator } from './base.js';
import { SlashCommandId } from '../../templates/index.js';

const FILE_PATHS: Record<SlashCommandId, string> = {
  proposal: '.clinerules/openspec-proposal.md',
  apply: '.clinerules/openspec-apply.md',
  archive: '.clinerules/openspec-archive.md',
  modified: '.clinerules/openspec-modified.md'
};

export class ClineSlashCommandConfigurator extends SlashCommandConfigurator {
  readonly toolId = 'cline';
  readonly isAvailable = true;

  protected getRelativePath(id: SlashCommandId): string {
    return FILE_PATHS[id];
  }

  protected getFrontmatter(id: SlashCommandId): string | undefined {
    const descriptions: Record<SlashCommandId, string> = {
      proposal: 'Scaffold a new OpenSpec change and validate strictly.',
      apply: 'Implement an approved OpenSpec change and keep tasks in sync.',
      archive: 'Archive a deployed OpenSpec change and update specs.',
      modified: 'Modify an existing requirement in a change proposal correctly.'
    };
    const description = descriptions[id];
    return `# OpenSpec: ${id.charAt(0).toUpperCase() + id.slice(1)}\n\n${description}`;
  }
}
