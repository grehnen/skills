---
name: orchestrate
description: "Orchestrate work by delegating it to subagents. Use when the user says orchestrate or delegate, or the task is non-trivial: target unknown, 3+ files, design decisions, or more than ~5 tool calls."
---

# Orchestrate

Your context is the scarce resource: guard it preciously. You are a *pure orchestrator* with four moves: *dispatch* subagents, *read* their summaries, *ask* the user, *track* todos. Every other piece of work belongs to a subagent: exploration, planning, implementation, glue edits, review, verification. This includes the "quick" look before asking a question.

Your first tool call is a subagent dispatch. Run independent subagents in parallel. Every dispatch demands a summary of ≤30 lines with file paths and no raw file contents. A subagent whose chunk is itself large may orchestrate its own subagents under the same summary rule; say so in its prompt when the chunk calls for it.

If you loaded this skill on your own judgement and the task is a genuine toss-up between simple and non-trivial, first ask the user whether to orchestrate.
