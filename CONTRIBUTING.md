# Contributing to WaspBot.xyz

Thank you for your interest in contributing to the WaspBot landing page! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Code Review Process](#code-review-process)
- [Community Guidelines](#community-guidelines)
- [License](#license)

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code. Please report any unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **pnpm**: Package manager (install via `npm install -g pnpm` or follow [official instructions](https://pnpm.io/installation))
- **Git**: For version control

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/waspbot.xyz.git
   cd waspbot.xyz
   ```

3. Add the upstream remote:

   ```bash
   git remote add upstream https://github.com/WaspBot/waspbot.xyz.git
   ```

## Development Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- Feature branches: `feature/description-of-feature`
- Bug fixes: `fix/description-of-fix`
- Documentation: `docs/description-of-docs`

### Making Changes

1. Create a new branch from `main`:

   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

2. Make your changes, ensuring you follow the [coding standards](#coding-standards)

3. Test your changes locally

4. Commit your changes with clear, descriptive messages:

   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

   Follow [Conventional Commits](https://conventionalcommits.org/) format where possible.

5. Push to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict type checking
- Avoid `any` types; use proper type definitions
- Use interfaces for object shapes, types for unions

### Code Style

- Follow the existing code style
- Use Prettier for consistent formatting
- Run `pnpm format` before committing
- Ensure `pnpm lint` passes without errors

### Component Guidelines

- Use functional components with hooks
- Follow React best practices
- Use TypeScript interfaces for props
- Maintain accessibility standards (WCAG guidelines)

### CSS and Styling

- Use Tailwind CSS for styling
- Follow utility-first approach
- Maintain responsive design principles
- Ensure dark/light mode compatibility if applicable

## Testing

Currently, this project does not have automated tests. When adding new features:

1. Consider adding unit tests for utility functions
2. Add integration tests for components if they become complex
3. Test manually across different browsers and devices
4. Ensure accessibility with screen readers and keyboard navigation

Future contributions should include appropriate test coverage.

## Submitting Changes

### Pull Request Process

1. Ensure your branch is up to date with `main`
2. Run all checks locally:
   - `pnpm lint`
   - `pnpm format:check`
   - `pnpm type-check`
   - `pnpm build`

3. Create a Pull Request on GitHub:
   - Use a clear, descriptive title
   - Provide a detailed description of changes
   - Reference any related issues
   - Include screenshots for UI changes

4. Wait for review and address any feedback

### Commit Guidelines

- Write clear, concise commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issues with `#123` format
- Keep commits focused on single changes

## Code Review Process

### Reviewers

Pull requests will be reviewed by maintainers. Reviews focus on:

- Code quality and adherence to standards
- Functionality and correctness
- Performance implications
- Security considerations
- Documentation updates

### Addressing Feedback

- Respond to all review comments
- Make requested changes or explain why changes aren't needed
- Re-request review after addressing feedback

## Community Guidelines

### Communication

- Be respectful and constructive in discussions
- Use GitHub issues for bug reports and feature requests
- Use GitHub discussions for general questions
- Keep discussions on-topic

### Issue Reporting

When reporting bugs:

- Use a clear, descriptive title
- Provide steps to reproduce
- Include browser/OS information
- Attach screenshots if applicable

### Feature Requests

- Check existing issues before creating new ones
- Provide detailed use cases
- Consider implementation complexity

## License

By contributing to this project, you agree that your contributions will be licensed under the same [Apache License 2.0](LICENSE) that covers the project.

---

Thank you for contributing to WaspBot.xyz! Your efforts help make algorithmic trading more accessible to everyone.</content>
