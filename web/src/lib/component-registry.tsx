import * as React from "react";
import type { ReactNode } from "react";
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Callout,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CodeBlock,
  Combobox,
  ComboboxItem,
  DataSourceBadge,
  DatePickerRange,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTrigger,
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
  FeaturedIcon,
  FileUpload,
  FileUploadIcon,
  FileUploadText,
  FileUploadTrigger,
  HeaderNav,
  HeaderNavActions,
  HeaderNavItem,
  HeaderNavItems,
  HeaderNavLogo,
  Input,
  InputGroup,
  Kbd,
  MapLayerToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectItem,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
  Slider,
  Spinner,
  StatCard,
  StatusDot,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  TextEditor,
  Textarea,
  Toggle,
  Tooltip,
  VideoPlayer,
} from "@kaanolin/react";
import { Heart, SearchLg, Settings01, Plus, Home01, Star01, Trash01, Edit01 } from "@kaanolin/react-icons/line/general";
import { Map01, MarkerPin01, Globe01 } from "@kaanolin/react-icons/line/maps-and-travel";
import { Mail01 } from "@kaanolin/react-icons/line/communication";
import { UploadCloud02 } from "@kaanolin/react-icons/line/general";

export interface PropSpec {
  name: string;
  type: string;
  typeSimple?: string;
  defaultValue?: string;
  required?: boolean;
  description?: string;
}

export interface DataAttribute {
  name: string;
  values: string;
}

export interface SubComponent {
  name: string;
  description?: string;
  props: PropSpec[];
  /** Optional data attributes exposed for styling state. */
  dataAttributes?: DataAttribute[];
}

export interface KeyboardKey {
  keys: string[];
  description: string;
}

export interface ComponentExample {
  title?: string;
  description?: string;
  preview: ReactNode;
  code: string;
}

export interface HeroCodeFile {
  name: string;
  lang: string;
  code: string;
}

export type PlaygroundControlType = "select" | "boolean" | "text" | "number" | "color";

export interface PlaygroundControl {
  prop: string;
  label?: string;
  type: PlaygroundControlType;
  options?: string[];
  defaultValue: string | number | boolean;
  description?: string;
}

export interface PlaygroundSpec {
  controls: PlaygroundControl[];
  render: (state: Record<string, unknown>) => ReactNode;
  toCode: (state: Record<string, unknown>) => string;
}

export interface ComponentDoc {
  slug: string;
  name: string;
  npmPackage: string;
  description: string;
  /** Live hero preview shown at the top of the component page. */
  hero: ReactNode;
  /** The code matching the hero preview (single snippet). */
  heroCode: string;
  /** Optional: multi-file code tabs for the hero (index.tsx + tailwind.config.js…). */
  codeFiles?: HeroCodeFile[];
  /** Bullet list of feature highlights shown below the hero. */
  features?: string[];
  /** JSX composition snippet for the Anatomy section. */
  anatomy: string;
  /** Import path used in the Installation and Import sections. */
  importPath: string;
  importSnippet: string;
  /** Root component description (shown above the first props table). */
  rootDescription?: string;
  /** Root component props. */
  props: PropSpec[];
  /** Optional data attributes exposed for styling root-level state. */
  rootDataAttributes?: DataAttribute[];
  /** Optional: sub-components with their own props tables. */
  subComponents?: SubComponent[];
  /** Additional in-depth examples below the API Reference. */
  examples?: ComponentExample[];
  /** Accessibility metadata (optional). */
  aria?: string;
  keyboard?: KeyboardKey[];
  /** Storybook-style controls + live preview for the component. */
  playground?: PlaygroundSpec;
}

/* ========================================================================== */
/* Stateful demo helpers — used by previews that need controlled state.       */
/* ========================================================================== */

function ModalDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader onClose={() => setOpen(false)}>
          <ModalTitle>Confirm action</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-text-secondary">
            This action will apply changes immediately.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>Manage your preferences.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function DropdownDemo() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="secondary">Actions</Button>
      </DropdownTrigger>
      <DropdownContent align="start">
        <DropdownItem>View</DropdownItem>
        <DropdownItem>Edit</DropdownItem>
        <DropdownSeparator />
        <DropdownItem destructive>Delete</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

function SelectDemo() {
  const [value, setValue] = React.useState<string | undefined>();
  return (
    <div className="w-64">
      <Select value={value} onValueChange={setValue} placeholder="Pick a fruit">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </Select>
    </div>
  );
}

function ComboboxDemo() {
  const [value, setValue] = React.useState<string | undefined>();
  return (
    <div className="w-64">
      <Combobox value={value} onValueChange={setValue} placeholder="Search fruit">
        <ComboboxItem value="apple">Apple</ComboboxItem>
        <ComboboxItem value="banana">Banana</ComboboxItem>
        <ComboboxItem value="cherry">Cherry</ComboboxItem>
        <ComboboxItem value="date">Date</ComboboxItem>
      </Combobox>
    </div>
  );
}

function CheckboxDemo() {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(true);
  return (
    <div className="flex flex-col gap-2">
      <Checkbox
        label="Email me about new products"
        checked={checked === true}
        onCheckedChange={setChecked}
      />
      <Checkbox label="Unchecked" description="Secondary info" />
      <Checkbox label="Error state" error />
    </div>
  );
}

function RadioGroupDemo() {
  const [value, setValue] = React.useState("monthly");
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <RadioGroupItem value="monthly" label="Monthly" description="Billed every month" />
      <RadioGroupItem value="yearly" label="Yearly" description="Save 20%" />
    </RadioGroup>
  );
}

function ToggleDemo() {
  const [on, setOn] = React.useState(true);
  return (
    <div className="flex flex-col gap-3">
      <Toggle checked={on} onCheckedChange={setOn} label="Notifications" />
      <Toggle size="sm" defaultChecked label="Compact" />
    </div>
  );
}

function SliderDemo() {
  const [value, setValue] = React.useState([50]);
  return (
    <div className="w-64">
      <Slider value={value} onValueChange={setValue} min={0} max={100} step={1} />
    </div>
  );
}

function TooltipDemo() {
  return (
    <div className="flex gap-3">
      <Tooltip content="Save the document">
        <Button variant="secondary">Save</Button>
      </Tooltip>
      <Tooltip content="More info" description="Extended description goes here." side="right">
        <Button variant="tertiary">Hover me</Button>
      </Tooltip>
    </div>
  );
}

function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-sm text-text-secondary">
        Overview panel content.
      </TabsContent>
      <TabsContent value="usage" className="text-sm text-text-secondary">
        Usage panel content.
      </TabsContent>
      <TabsContent value="history" className="text-sm text-text-secondary">
        History panel content.
      </TabsContent>
    </Tabs>
  );
}

function DatePickerRangeDemo() {
  const [value, setValue] = React.useState<{ from?: Date; to?: Date } | undefined>();
  return <DatePickerRange value={value} onChange={setValue} />;
}

function PaginationDemo() {
  const [page, setPage] = React.useState(1);
  const total = 5;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          />
        </PaginationItem>
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <PaginationItem key={n}>
            <PaginationLink isActive={page === n} onClick={() => setPage(n)}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            disabled={page === total}
            onClick={() => setPage((p) => Math.min(total, p + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function ButtonGroupDemo() {
  const [value, setValue] = React.useState("left");
  return (
    <ButtonGroup type="single" value={value} onValueChange={(v) => v && setValue(v as string)}>
      <ButtonGroupItem value="left">Left</ButtonGroupItem>
      <ButtonGroupItem value="center">Center</ButtonGroupItem>
      <ButtonGroupItem value="right">Right</ButtonGroupItem>
    </ButtonGroup>
  );
}

function MapLayerToggleDemo() {
  const [active, setActive] = React.useState("streets");
  return (
    <MapLayerToggle
      activeLayer={active}
      onLayerChange={setActive}
      layers={[
        { id: "streets", label: "Streets", icon: Map01 },
        { id: "satellite", label: "Satellite", icon: Globe01 },
        { id: "terrain", label: "Terrain", icon: MarkerPin01 },
      ]}
    />
  );
}

function TextEditorDemo() {
  const [content, setContent] = React.useState("<p>Hello <strong>world</strong>.</p>");
  return (
    <div className="w-full max-w-xl">
      <TextEditor content={content} onContentChange={setContent} placeholder="Start writing..." />
    </div>
  );
}

function FileUploadDemo() {
  const [files, setFiles] = React.useState<File[]>([]);
  return (
    <div className="w-full max-w-md">
      <FileUpload onFilesSelected={setFiles} multiple>
        <FileUploadIcon>
          <UploadCloud02 className="size-6" />
        </FileUploadIcon>
        <FileUploadText>
          <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
        </FileUploadText>
      </FileUpload>
      {files.length > 0 && (
        <p className="mt-2 text-xs text-text-tertiary">
          {files.length} file{files.length === 1 ? "" : "s"} selected
        </p>
      )}
    </div>
  );
}

function VideoPlayerDemo() {
  return (
    <div className="w-full max-w-md">
      <VideoPlayer
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://www.w3schools.com/html/pic_trulli.jpg"
        aspectRatio="16/9"
      />
    </div>
  );
}

/* ========================================================================== */
/* Component registry                                                         */
/* ========================================================================== */

export const components: ComponentDoc[] = [
  /* ==================== INPUTS ==================== */
  {
    slug: "button",
    name: "Button",
    npmPackage: "@kaanolin/react",
    description:
      "A clickable element that triggers an action. Supports multiple variants, sizes, and an asChild Radix-slot pattern.",
    hero: (
      <div className="flex gap-3 flex-wrap items-center">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    ),
    heroCode: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="destructive">Destructive</Button>`,
    importPath: "@kaanolin/react/button",
    importSnippet: `import { Button } from "@kaanolin/react/button";`,
    anatomy: `<Button variant="primary" size="md">
  Click me
</Button>`,
    props: [
      { name: "variant", type: '"primary" | "secondary" | "tertiary" | "destructive"', typeSimple: "enum", defaultValue: '"primary"', description: "Visual style." },
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "loading", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Shows a spinner and disables interaction." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disables the button." },
      { name: "asChild", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Render as the child element (Radix Slot pattern)." },
    ],
    examples: [
      {
        title: "Sizes",
        description: "Four size steps: sm, md (default), lg, xl.",
        preview: (
          <div className="flex items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </div>
        ),
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>`,
      },
      {
        title: "Loading state",
        preview: (
          <div className="flex gap-3">
            <Button loading>Saving</Button>
            <Button loading variant="secondary">
              Saving
            </Button>
          </div>
        ),
        code: `<Button loading>Saving</Button>
<Button loading variant="secondary">Saving</Button>`,
      },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    keyboard: [
      { keys: ["Space"], description: "Activates the button." },
      { keys: ["Enter"], description: "Activates the button." },
    ],
    playground: {
      controls: [
        { prop: "variant", type: "select", options: ["primary", "secondary", "tertiary", "destructive"], defaultValue: "primary" },
        { prop: "size", type: "select", options: ["sm", "md", "lg", "xl"], defaultValue: "md" },
        { prop: "loading", type: "boolean", defaultValue: false },
        { prop: "disabled", type: "boolean", defaultValue: false },
        { prop: "children", label: "label", type: "text", defaultValue: "Click me" },
      ],
      render: (s) => (
        <Button
          variant={s.variant as "primary" | "secondary" | "tertiary" | "destructive"}
          size={s.size as "sm" | "md" | "lg" | "xl"}
          loading={s.loading as boolean}
          disabled={s.disabled as boolean}
        >
          {String(s.children)}
        </Button>
      ),
      toCode: (s) => {
        const parts = [`variant="${s.variant}"`, `size="${s.size}"`];
        if (s.loading) parts.push("loading");
        if (s.disabled) parts.push("disabled");
        return `<Button ${parts.join(" ")}>\n  ${s.children}\n</Button>`;
      },
    },
  },
  {
    slug: "input",
    name: "Input",
    npmPackage: "@kaanolin/react",
    description:
      "Text field with optional label, helper text, leading icon, tooltip and keyboard shortcut indicator.",
    hero: (
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Input label="Email" placeholder="you@company.com" icon={Mail01} />
        <Input label="Search" placeholder="Search..." icon={SearchLg} shortcut />
        <Input label="Invalid" variant="error" helperText="This field is required." />
      </div>
    ),
    heroCode: `<Input label="Email" placeholder="you@company.com" icon={Mail01} />
<Input label="Search" placeholder="Search..." icon={SearchLg} shortcut />
<Input label="Invalid" variant="error" helperText="This field is required." />`,
    importPath: "@kaanolin/react/input",
    importSnippet: `import { Input } from "@kaanolin/react/input";`,
    anatomy: `<Input label="Email" helperText="We won't spam." icon={Mail01} />`,
    props: [
      { name: "size", type: '"small" | "medium" | "large"', typeSimple: "enum", defaultValue: '"medium"', description: "Rendered size." },
      { name: "variant", type: '"default" | "error" | "success"', typeSimple: "enum", defaultValue: '"default"', description: "Visual state." },
      { name: "label", type: "string", typeSimple: "string", description: "Label text above the input." },
      { name: "helperText", type: "string", typeSimple: "string", description: "Helper or hint text below the input." },
      { name: "icon", type: "React.ComponentType<SVGProps<SVGSVGElement>>", typeSimple: "function", description: "Leading icon component." },
      { name: "tooltip", type: "string", typeSimple: "string", description: "Tooltip text for a help icon next to the label." },
      { name: "shortcut", type: "string | boolean", typeSimple: "string", description: 'Keyboard shortcut to display. Pass `true` for the default "⌘K".' },
      { name: "isRequired", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Mark the field as required." },
      { name: "hideRequiredIndicator", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Hide the asterisk even when required." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the field." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/textbox/",
  },
  {
    slug: "textarea",
    name: "Textarea",
    npmPackage: "@kaanolin/react",
    description:
      "Multi-line text field with the same label / helper-text / variant system as Input.",
    hero: (
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Textarea label="Description" placeholder="Tell us more..." />
        <Textarea label="Feedback" variant="error" helperText="This field is required." />
      </div>
    ),
    heroCode: `<Textarea label="Description" placeholder="Tell us more..." />
<Textarea label="Feedback" variant="error" helperText="This field is required." />`,
    importPath: "@kaanolin/react/textarea",
    importSnippet: `import { Textarea } from "@kaanolin/react/textarea";`,
    anatomy: `<Textarea label="Description" rows={4} />`,
    props: [
      { name: "size", type: '"small" | "medium" | "large"', typeSimple: "enum", defaultValue: '"medium"', description: "Rendered size." },
      { name: "variant", type: '"default" | "error" | "success"', typeSimple: "enum", defaultValue: '"default"', description: "Visual state." },
      { name: "label", type: "string", typeSimple: "string", description: "Label text above the textarea." },
      { name: "helperText", type: "string", typeSimple: "string", description: "Helper or hint text below the textarea." },
      { name: "tooltip", type: "string", typeSimple: "string", description: "Tooltip text for a help icon next to the label." },
      { name: "isRequired", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Mark the field as required." },
      { name: "hideRequiredIndicator", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Hide the asterisk even when required." },
      { name: "rows", type: "number", typeSimple: "number", defaultValue: "4", description: "Initial visible row count." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the field." },
    ],
  },
  {
    slug: "input-group",
    name: "InputGroup",
    npmPackage: "@kaanolin/react",
    description:
      "Composable container that wraps an Input with leading or trailing addons such as text prefixes, buttons, or dropdowns.",
    hero: (
      <div className="w-full max-w-sm">
        <InputGroup label="Website" prefix="https://">
          <Input placeholder="example.com" />
        </InputGroup>
      </div>
    ),
    heroCode: `<InputGroup label="Website" prefix="https://">
  <Input placeholder="example.com" />
</InputGroup>`,
    importPath: "@kaanolin/react/input-group",
    importSnippet: `import { InputGroup } from "@kaanolin/react/input-group";
import { Input } from "@kaanolin/react/input";`,
    anatomy: `<InputGroup prefix="https://" label="Website">
  <Input placeholder="example.com" />
</InputGroup>`,
    props: [
      { name: "size", type: '"small" | "medium" | "large"', typeSimple: "enum", defaultValue: '"medium"', description: "Size applied to prefixes/addons." },
      { name: "prefix", type: "string", typeSimple: "string", description: "Text prefix displayed before the input." },
      { name: "leadingAddon", type: "ReactNode", typeSimple: "ReactNode", description: "Arbitrary addon rendered before the input." },
      { name: "trailingAddon", type: "ReactNode", typeSimple: "ReactNode", description: "Arbitrary addon rendered after the input." },
      { name: "label", type: "string", typeSimple: "string", description: "Label text above the group." },
      { name: "hint", type: "string", typeSimple: "string", description: "Hint text below the group." },
      { name: "isRequired", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Show required asterisk on the label." },
      { name: "isInvalid", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Apply error styling to the hint." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the group visually." },
    ],
    subComponents: [
      {
        name: "InputPrefix",
        description: "Standalone prefix tag for use as a leading or trailing addon.",
        props: [
          { name: "position", type: '"leading" | "trailing"', typeSimple: "enum", defaultValue: '"leading"', description: "Side of the input this prefix sits on." },
          { name: "size", type: '"small" | "medium" | "large"', typeSimple: "enum", defaultValue: '"medium"', description: "Matches the group size." },
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Apply disabled styling." },
        ],
      },
    ],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    npmPackage: "@kaanolin/react",
    description:
      "Single selection box with label, description, indeterminate and error states. Built on Radix Checkbox.",
    hero: <CheckboxDemo />,
    heroCode: `const [checked, setChecked] = React.useState(true);

<Checkbox
  label="Email me about new products"
  checked={checked}
  onCheckedChange={setChecked}
/>
<Checkbox label="Unchecked" description="Secondary info" />
<Checkbox label="Error state" error />`,
    importPath: "@kaanolin/react/checkbox",
    importSnippet: `import { Checkbox } from "@kaanolin/react/checkbox";`,
    anatomy: `<Checkbox label="Accept terms" description="Required to continue" />`,
    props: [
      { name: "size", type: '"sm" | "md"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "error", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Show error styling." },
      { name: "checked", type: "boolean", typeSimple: "boolean", description: "Controlled checked state." },
      { name: "defaultChecked", type: "boolean", typeSimple: "boolean", description: "Uncontrolled default checked state." },
      { name: "onCheckedChange", type: '(checked: boolean | "indeterminate") => void', typeSimple: "function", description: "Called when the checked state changes." },
      { name: "indeterminate", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Render in indeterminate state." },
      { name: "label", type: "string", typeSimple: "string", description: "Text label rendered next to the checkbox." },
      { name: "description", type: "string", typeSimple: "string", description: "Description shown below the label." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable interaction." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",
    keyboard: [
      { keys: ["Space"], description: "Toggle the checkbox." },
    ],
  },
  {
    slug: "radio-group",
    name: "RadioGroup",
    npmPackage: "@kaanolin/react",
    description:
      "Mutually exclusive selection between two or more items. Built on Radix RadioGroup.",
    hero: <RadioGroupDemo />,
    heroCode: `const [value, setValue] = React.useState("monthly");

<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroupItem value="monthly" label="Monthly" description="Billed every month" />
  <RadioGroupItem value="yearly" label="Yearly" description="Save 20%" />
</RadioGroup>`,
    importPath: "@kaanolin/react/radio-group",
    importSnippet: `import { RadioGroup, RadioGroupItem } from "@kaanolin/react/radio-group";`,
    anatomy: `<RadioGroup defaultValue="a">
  <RadioGroupItem value="a" label="Option A" />
  <RadioGroupItem value="b" label="Option B" />
</RadioGroup>`,
    props: [
      { name: "orientation", type: '"vertical" | "horizontal"', typeSimple: "enum", defaultValue: '"vertical"', description: "Layout direction of items." },
      { name: "value", type: "string", typeSimple: "string", description: "Controlled selected value." },
      { name: "defaultValue", type: "string", typeSimple: "string", description: "Uncontrolled default value." },
      { name: "onValueChange", type: "(value: string) => void", typeSimple: "function", description: "Called when the selected value changes." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable all items." },
    ],
    subComponents: [
      {
        name: "RadioGroupItem",
        description: "An individual radio option within a RadioGroup.",
        props: [
          { name: "value", type: "string", typeSimple: "string", required: true, description: "Value this item represents." },
          { name: "size", type: '"sm" | "md"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
          { name: "label", type: "string", typeSimple: "string", description: "Text label next to the radio." },
          { name: "description", type: "string", typeSimple: "string", description: "Description below the label." },
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable this item." },
        ],
      },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/",
    keyboard: [
      { keys: ["ArrowDown", "ArrowRight"], description: "Move focus to the next item." },
      { keys: ["ArrowUp", "ArrowLeft"], description: "Move focus to the previous item." },
      { keys: ["Space"], description: "Select the focused item." },
    ],
  },
  {
    slug: "select",
    name: "Select",
    npmPackage: "@kaanolin/react",
    description:
      "Single-select dropdown with full keyboard navigation, typeahead, and a trigger that mirrors the Input style.",
    hero: <SelectDemo />,
    heroCode: `const [value, setValue] = React.useState<string>();

<Select value={value} onValueChange={setValue} placeholder="Pick a fruit">
  <SelectItem value="apple">Apple</SelectItem>
  <SelectItem value="banana">Banana</SelectItem>
  <SelectItem value="cherry">Cherry</SelectItem>
</Select>`,
    importPath: "@kaanolin/react/select",
    importSnippet: `import { Select, SelectItem, SelectGroup, SelectSeparator } from "@kaanolin/react/select";`,
    anatomy: `<Select>
  <SelectGroup label="Fruits">
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectItem value="other">Other</SelectItem>
</Select>`,
    props: [
      { name: "value", type: "string", typeSimple: "string", description: "Controlled selected value." },
      { name: "defaultValue", type: "string", typeSimple: "string", description: "Uncontrolled default value." },
      { name: "onValueChange", type: "(value: string) => void", typeSimple: "function", description: "Called when the selected value changes." },
      { name: "placeholder", type: "string", typeSimple: "string", defaultValue: '"Select..."', description: "Placeholder text when nothing is selected." },
      { name: "size", type: '"small" | "medium" | "large"', typeSimple: "enum", defaultValue: '"medium"', description: "Trigger size." },
      { name: "variant", type: '"default" | "error" | "success"', typeSimple: "enum", defaultValue: '"default"', description: "Trigger visual state." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the trigger." },
      { name: "label", type: "string", typeSimple: "string", description: "Label above the trigger." },
      { name: "helperText", type: "string", typeSimple: "string", description: "Helper text below the trigger." },
      { name: "tooltip", type: "string", typeSimple: "string", description: "Tooltip on the label." },
      { name: "isRequired", type: "boolean", typeSimple: "boolean", description: "Mark required." },
      { name: "onOpenChange", type: "(open: boolean) => void", typeSimple: "function", description: "Called when the dropdown opens/closes." },
    ],
    subComponents: [
      {
        name: "SelectItem",
        props: [
          { name: "value", type: "string", typeSimple: "string", required: true, description: "String value for this option." },
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable this option." },
        ],
      },
      {
        name: "SelectGroup",
        props: [
          { name: "label", type: "string", typeSimple: "string", required: true, description: "Group heading." },
        ],
      },
      {
        name: "SelectSeparator",
        props: [],
      },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
    keyboard: [
      { keys: ["Enter", "Space"], description: "Open the dropdown or select the highlighted item." },
      { keys: ["ArrowDown"], description: "Highlight the next item." },
      { keys: ["ArrowUp"], description: "Highlight the previous item." },
      { keys: ["Home"], description: "Highlight the first item." },
      { keys: ["End"], description: "Highlight the last item." },
      { keys: ["Escape"], description: "Close the dropdown." },
      { keys: ["A – Z"], description: "Typeahead — jump to a matching item." },
    ],
  },
  {
    slug: "combobox",
    name: "Combobox",
    npmPackage: "@kaanolin/react",
    description:
      "Text-filterable Select. Users type to narrow results while still supporting full keyboard navigation.",
    hero: <ComboboxDemo />,
    heroCode: `const [value, setValue] = React.useState<string>();

<Combobox value={value} onValueChange={setValue} placeholder="Search fruit">
  <ComboboxItem value="apple">Apple</ComboboxItem>
  <ComboboxItem value="banana">Banana</ComboboxItem>
  <ComboboxItem value="cherry">Cherry</ComboboxItem>
  <ComboboxItem value="date">Date</ComboboxItem>
</Combobox>`,
    importPath: "@kaanolin/react/combobox",
    importSnippet: `import { Combobox, ComboboxItem, ComboboxGroup, ComboboxSeparator } from "@kaanolin/react/combobox";`,
    anatomy: `<Combobox placeholder="Search...">
  <ComboboxItem value="a">Apple</ComboboxItem>
  <ComboboxItem value="b">Banana</ComboboxItem>
</Combobox>`,
    props: [
      { name: "value", type: "string", typeSimple: "string", description: "Controlled selected value." },
      { name: "defaultValue", type: "string", typeSimple: "string", description: "Uncontrolled default value." },
      { name: "onValueChange", type: "(value: string) => void", typeSimple: "function", description: "Called when the selected value changes." },
      { name: "placeholder", type: "string", typeSimple: "string", defaultValue: '"Search..."', description: "Placeholder text." },
      { name: "size", type: '"small" | "medium" | "large"', typeSimple: "enum", defaultValue: '"medium"', description: "Input size." },
      { name: "variant", type: '"default" | "error" | "success"', typeSimple: "enum", defaultValue: '"default"', description: "Input visual state." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the input." },
      { name: "label", type: "string", typeSimple: "string", description: "Label above the input." },
      { name: "helperText", type: "string", typeSimple: "string", description: "Helper text below the input." },
      { name: "onOpenChange", type: "(open: boolean) => void", typeSimple: "function", description: "Called when the dropdown opens/closes." },
    ],
    subComponents: [
      {
        name: "ComboboxItem",
        props: [
          { name: "value", type: "string", typeSimple: "string", required: true, description: "String value for this option." },
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable this option." },
        ],
      },
      {
        name: "ComboboxGroup",
        props: [
          { name: "label", type: "string", typeSimple: "string", required: true, description: "Group heading." },
        ],
      },
      {
        name: "ComboboxSeparator",
        props: [],
      },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
    keyboard: [
      { keys: ["ArrowDown"], description: "Open the list or highlight the next match." },
      { keys: ["ArrowUp"], description: "Highlight the previous match." },
      { keys: ["Enter"], description: "Select the highlighted item." },
      { keys: ["Escape"], description: "Close the dropdown and clear the search." },
    ],
  },
  {
    slug: "toggle",
    name: "Toggle",
    npmPackage: "@kaanolin/react",
    description:
      "Two-state switch for binary settings. Built on Radix Switch.",
    hero: <ToggleDemo />,
    heroCode: `const [on, setOn] = React.useState(true);

<Toggle checked={on} onCheckedChange={setOn} label="Notifications" />
<Toggle size="sm" defaultChecked label="Compact" />`,
    importPath: "@kaanolin/react/toggle",
    importSnippet: `import { Toggle } from "@kaanolin/react/toggle";`,
    anatomy: `<Toggle label="Notifications" description="Email + in-app" />`,
    props: [
      { name: "size", type: '"sm" | "md"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "label", type: "string", typeSimple: "string", description: "Label shown next to the switch." },
      { name: "description", type: "string", typeSimple: "string", description: "Helper description below the label." },
      { name: "checked", type: "boolean", typeSimple: "boolean", description: "Controlled checked state." },
      { name: "defaultChecked", type: "boolean", typeSimple: "boolean", description: "Uncontrolled default." },
      { name: "onCheckedChange", type: "(checked: boolean) => void", typeSimple: "function", description: "Called when the switch toggles." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the switch." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/switch/",
    keyboard: [
      { keys: ["Space"], description: "Toggle the switch." },
      { keys: ["Enter"], description: "Toggle the switch." },
    ],
  },
  {
    slug: "slider",
    name: "Slider",
    npmPackage: "@kaanolin/react",
    description:
      "Numeric range input with single or multiple thumbs. Built on Radix Slider.",
    hero: <SliderDemo />,
    heroCode: `const [value, setValue] = React.useState([50]);

<Slider value={value} onValueChange={setValue} min={0} max={100} step={1} />`,
    importPath: "@kaanolin/react/slider",
    importSnippet: `import { Slider } from "@kaanolin/react/slider";`,
    anatomy: `<Slider defaultValue={[25, 75]} min={0} max={100} />`,
    props: [
      { name: "size", type: '"sm" | "md"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "value", type: "number[]", typeSimple: "number[]", description: "Controlled value(s)." },
      { name: "defaultValue", type: "number[]", typeSimple: "number[]", description: "Uncontrolled default value(s)." },
      { name: "onValueChange", type: "(value: number[]) => void", typeSimple: "function", description: "Called continuously as the user drags." },
      { name: "onValueCommit", type: "(value: number[]) => void", typeSimple: "function", description: "Called when the user releases the thumb." },
      { name: "min", type: "number", typeSimple: "number", defaultValue: "0", description: "Minimum value." },
      { name: "max", type: "number", typeSimple: "number", defaultValue: "100", description: "Maximum value." },
      { name: "step", type: "number", typeSimple: "number", defaultValue: "1", description: "Step increment." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the slider." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/slider/",
    keyboard: [
      { keys: ["ArrowRight", "ArrowUp"], description: "Increase value by one step." },
      { keys: ["ArrowLeft", "ArrowDown"], description: "Decrease value by one step." },
      { keys: ["Home"], description: "Jump to the minimum." },
      { keys: ["End"], description: "Jump to the maximum." },
    ],
  },
  {
    slug: "date-picker-range",
    name: "DatePickerRange",
    npmPackage: "@kaanolin/react",
    description:
      "Popover calendar for selecting a start + end date, with typed date inputs and Apply / Cancel actions.",
    hero: <DatePickerRangeDemo />,
    heroCode: `const [value, setValue] = React.useState<DatePickerRangeValue>();

<DatePickerRange value={value} onChange={setValue} />`,
    importPath: "@kaanolin/react/date-picker-range",
    importSnippet: `import { DatePickerRange } from "@kaanolin/react/date-picker-range";
import type { DatePickerRangeValue } from "@kaanolin/react/date-picker-range";`,
    anatomy: `<DatePickerRange value={range} onChange={setRange} numberOfMonths={2} />`,
    props: [
      { name: "value", type: "DatePickerRangeValue", typeSimple: "object", description: "Controlled selected range ({ from, to })." },
      { name: "onChange", type: "(range: DatePickerRangeValue) => void", typeSimple: "function", description: "Called with the committed range on Apply." },
      { name: "placeholder", type: "string", typeSimple: "string", defaultValue: '"Select date range"', description: "Placeholder shown on the trigger." },
      { name: "displayFormat", type: "string", typeSimple: "string", defaultValue: '"MMM d, yyyy"', description: "date-fns format for the trigger text." },
      { name: "inputFormat", type: "string", typeSimple: "string", defaultValue: '"M / d / yyyy"', description: "Format of the date-text inputs." },
      { name: "numberOfMonths", type: "number", typeSimple: "number", defaultValue: "2", description: "Months shown side-by-side." },
      { name: "minDate", type: "Date", typeSimple: "Date", description: "Earliest selectable date." },
      { name: "maxDate", type: "Date", typeSimple: "Date", description: "Latest selectable date." },
      { name: "align", type: '"start" | "center" | "end"', typeSimple: "enum", defaultValue: '"start"', description: "Popover alignment." },
      { name: "cancelLabel", type: "string", typeSimple: "string", defaultValue: '"Cancel"', description: "i18n label for the Cancel button." },
      { name: "applyLabel", type: "string", typeSimple: "string", defaultValue: '"Apply"', description: "i18n label for the Apply button." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the trigger." },
      { name: "onOpenChange", type: "(open: boolean) => void", typeSimple: "function", description: "Called when the popover opens/closes." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
    keyboard: [
      { keys: ["Escape"], description: "Close the popover without applying." },
      { keys: ["Tab"], description: "Move focus between the calendar and date inputs." },
    ],
  },
  {
    slug: "file-upload",
    name: "FileUpload",
    npmPackage: "@kaanolin/react",
    description:
      "Drag-and-drop or click-to-browse upload target. Compose icon, text and an explicit trigger for the picker.",
    hero: <FileUploadDemo />,
    heroCode: `const [files, setFiles] = React.useState<File[]>([]);

<FileUpload onFilesSelected={setFiles} multiple>
  <FileUploadIcon><UploadCloud02 className="size-6" /></FileUploadIcon>
  <FileUploadText>
    <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
  </FileUploadText>
</FileUpload>`,
    importPath: "@kaanolin/react/file-upload",
    importSnippet: `import { FileUpload, FileUploadIcon, FileUploadText, FileUploadTrigger } from "@kaanolin/react/file-upload";`,
    anatomy: `<FileUpload onFilesSelected={fn} multiple accept="image/*">
  <FileUploadIcon>…</FileUploadIcon>
  <FileUploadText>
    <FileUploadTrigger>Click to upload</FileUploadTrigger> or drag and drop
  </FileUploadText>
</FileUpload>`,
    props: [
      { name: "onFilesSelected", type: "(files: File[]) => void", typeSimple: "function", description: "Called when files are selected via drop or picker." },
      { name: "accept", type: "string", typeSimple: "string", description: 'Accepted file types (e.g. "image/*", ".pdf").' },
      { name: "multiple", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Allow multiple file selection." },
      { name: "maxSize", type: "number", typeSimple: "number", description: "Max file size in bytes; larger files are filtered out." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the dropzone." },
    ],
    subComponents: [
      { name: "FileUploadIcon", description: "Icon slot at the top of the dropzone.", props: [] },
      { name: "FileUploadText", description: "Primary text slot.", props: [] },
      { name: "FileUploadTrigger", description: "Inline button that opens the file picker.", props: [] },
    ],
  },

  /* ==================== DISPLAY ==================== */
  {
    slug: "avatar",
    name: "Avatar",
    npmPackage: "@kaanolin/react",
    description:
      "User image with automatic initials fallback and an optional status indicator.",
    hero: (
      <div className="flex items-center gap-3">
        <Avatar size="sm" name="Alice Anderson" />
        <Avatar size="md" name="Bob Brown" status="online" />
        <Avatar size="lg" name="Cara Chen" shape="rounded" status="busy" />
        <Avatar size="xl" src="https://i.pravatar.cc/150?img=5" name="David Dupont" />
      </div>
    ),
    heroCode: `<Avatar size="sm" name="Alice Anderson" />
<Avatar size="md" name="Bob Brown" status="online" />
<Avatar size="lg" name="Cara Chen" shape="rounded" status="busy" />
<Avatar size="xl" src="https://i.pravatar.cc/150?img=5" name="David Dupont" />`,
    importPath: "@kaanolin/react/avatar",
    importSnippet: `import { Avatar } from "@kaanolin/react/avatar";`,
    anatomy: `<Avatar src="/me.jpg" name="My Name" size="md" status="online" />`,
    props: [
      { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "shape", type: '"circle" | "rounded"', typeSimple: "enum", defaultValue: '"circle"', description: "Border-radius variant." },
      { name: "src", type: "string", typeSimple: "string", description: "Image source URL." },
      { name: "alt", type: "string", typeSimple: "string", description: "Alt text for the image." },
      { name: "name", type: "string", typeSimple: "string", description: "Full name used to derive initials." },
      { name: "status", type: '"online" | "offline" | "away" | "busy"', typeSimple: "enum", description: "Status indicator dot." },
    ],
  },
  {
    slug: "badge",
    name: "Badge",
    npmPackage: "@kaanolin/react",
    description:
      "Compact status label for conveying count, status, or categorisation next to another element.",
    hero: (
      <div className="flex gap-2 flex-wrap">
        <Badge color="brand">Brand</Badge>
        <Badge color="success" dot>
          Live
        </Badge>
        <Badge color="warning">Warn</Badge>
        <Badge color="error" shape="badge">
          Error
        </Badge>
        <Badge color="gray" dismissible>
          Dismissible
        </Badge>
      </div>
    ),
    heroCode: `<Badge color="brand">Brand</Badge>
<Badge color="success" dot>Live</Badge>
<Badge color="warning">Warn</Badge>
<Badge color="error" shape="badge">Error</Badge>
<Badge color="gray" dismissible>Dismissible</Badge>`,
    importPath: "@kaanolin/react/badge",
    importSnippet: `import { Badge } from "@kaanolin/react/badge";`,
    anatomy: `<Badge color="brand" size="md" shape="pill">
  Label
</Badge>`,
    props: [
      { name: "color", type: "BadgeColor", typeSimple: "enum", defaultValue: '"gray"', description: "Semantic color tone." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "shape", type: '"pill" | "badge"', typeSimple: "enum", defaultValue: '"pill"', description: "Border radius style." },
      { name: "dot", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Show a colored dot before the label." },
      { name: "dismissible", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Show a close button and fire onDismiss." },
      { name: "onDismiss", type: "() => void", typeSimple: "function", description: "Called when the dismiss button is clicked." },
    ],
    playground: {
      controls: [
        { prop: "color", type: "select", options: ["gray", "brand", "error", "warning", "success", "blue", "indigo", "purple", "pink", "orange"], defaultValue: "brand" },
        { prop: "size", type: "select", options: ["sm", "md", "lg"], defaultValue: "md" },
        { prop: "shape", type: "select", options: ["pill", "badge"], defaultValue: "pill" },
        { prop: "dot", type: "boolean", defaultValue: false },
        { prop: "children", label: "label", type: "text", defaultValue: "New" },
      ],
      render: (s) => (
        <Badge
          color={s.color as "gray" | "brand" | "error" | "warning" | "success" | "blue" | "indigo" | "purple" | "pink" | "orange"}
          size={s.size as "sm" | "md" | "lg"}
          shape={s.shape as "pill" | "badge"}
          dot={s.dot as boolean}
        >
          {String(s.children)}
        </Badge>
      ),
      toCode: (s) => {
        const parts = [`color="${s.color}"`, `size="${s.size}"`, `shape="${s.shape}"`];
        if (s.dot) parts.push("dot");
        return `<Badge ${parts.join(" ")}>${s.children}</Badge>`;
      },
    },
  },
  {
    slug: "callout",
    name: "Callout",
    npmPackage: "@kaanolin/react",
    description:
      "Advisory note for info, success, warning and error messaging — supports an optional title and a leading icon per tone.",
    hero: (
      <div className="w-full max-w-md space-y-2">
        <Callout tone="info" title="Heads up">
          Informational note.
        </Callout>
        <Callout tone="warning" title="Caution">
          Destructive action follows.
        </Callout>
      </div>
    ),
    heroCode: `<Callout tone="info" title="Heads up">
  Informational note.
</Callout>
<Callout tone="warning" title="Caution">
  Destructive action follows.
</Callout>`,
    importPath: "@kaanolin/react/callout",
    importSnippet: `import { Callout } from "@kaanolin/react/callout";`,
    anatomy: `<Callout tone="info" title="Heading">
  Description content.
</Callout>`,
    props: [
      { name: "tone", type: '"info" | "success" | "warning" | "error" | "neutral"', typeSimple: "enum", defaultValue: '"info"', description: "Semantic intent." },
      { name: "title", type: "string", typeSimple: "string", description: "Optional heading shown above the body." },
      { name: "icon", type: "React.ComponentType<SVGProps<SVGSVGElement>>", typeSimple: "function", description: "Override the default tone icon." },
    ],
    examples: [
      {
        title: "All tones",
        preview: (
          <div className="w-full space-y-2">
            <Callout tone="info" title="Info">
              Something informative.
            </Callout>
            <Callout tone="success" title="Success">
              Changes saved.
            </Callout>
            <Callout tone="warning" title="Warning">
              Proceed with care.
            </Callout>
            <Callout tone="error" title="Error">
              Operation failed.
            </Callout>
          </div>
        ),
        code: `<Callout tone="info" title="Info">Something informative.</Callout>
<Callout tone="success" title="Success">Changes saved.</Callout>
<Callout tone="warning" title="Warning">Proceed with care.</Callout>
<Callout tone="error" title="Error">Operation failed.</Callout>`,
      },
    ],
    playground: {
      controls: [
        { prop: "tone", type: "select", options: ["info", "success", "warning", "error", "neutral"], defaultValue: "info" },
        { prop: "title", type: "text", defaultValue: "Heads up" },
        { prop: "children", label: "body", type: "text", defaultValue: "Something you should know." },
      ],
      render: (s) => (
        <Callout
          tone={s.tone as "info" | "success" | "warning" | "error" | "neutral"}
          title={String(s.title)}
        >
          {String(s.children)}
        </Callout>
      ),
      toCode: (s) =>
        `<Callout tone="${s.tone}" title="${s.title}">\n  ${s.children}\n</Callout>`,
    },
  },
  {
    slug: "card",
    name: "Card",
    npmPackage: "@kaanolin/react",
    description:
      "Surface container for grouping related content. Composable header, content, and footer slots with four visual variants.",
    hero: (
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Project Titan</CardTitle>
            <CardDescription>Migration to the new platform</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-text-secondary">
            Tracking 12 open issues and 3 pull requests this week.
          </CardContent>
          <CardFooter>
            <Button size="sm">View</Button>
            <Button size="sm" variant="secondary">
              Dismiss
            </Button>
          </CardFooter>
        </Card>
      </div>
    ),
    heroCode: `<Card>
  <CardHeader>
    <CardTitle>Project Titan</CardTitle>
    <CardDescription>Migration to the new platform</CardDescription>
  </CardHeader>
  <CardContent>Tracking 12 open issues and 3 pull requests this week.</CardContent>
  <CardFooter>
    <Button size="sm">View</Button>
    <Button size="sm" variant="secondary">Dismiss</Button>
  </CardFooter>
</Card>`,
    importPath: "@kaanolin/react/card",
    importSnippet: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardDivider, CardImage } from "@kaanolin/react/card";`,
    anatomy: `<Card>
  <CardImage src="/cover.jpg" />
  <CardHeader action={<Button />}>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Body</CardContent>
  <CardDivider />
  <CardFooter>Footer</CardFooter>
</Card>`,
    props: [
      { name: "variant", type: '"default" | "elevated" | "outline" | "ghost"', typeSimple: "enum", defaultValue: '"default"', description: "Surface style." },
      { name: "size", type: '"default" | "sm"', typeSimple: "enum", defaultValue: '"default"', description: "Spacing applied to header, content and footer." },
      { name: "interactive", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Enable hover shadow and focus ring for clickable cards." },
    ],
    subComponents: [
      {
        name: "CardImage",
        props: [
          { name: "position", type: '"top" | "bottom"', typeSimple: "enum", defaultValue: '"top"', description: "Where the image sits in the card." },
          { name: "height", type: '"sm" | "md" | "lg" | "auto"', typeSimple: "enum", defaultValue: '"md"', description: "Fixed image height." },
        ],
      },
      {
        name: "CardHeader",
        props: [
          { name: "action", type: "ReactNode", typeSimple: "ReactNode", description: "Element rendered in the top-right corner." },
        ],
      },
      { name: "CardTitle", props: [] },
      { name: "CardDescription", props: [] },
      { name: "CardContent", props: [] },
      { name: "CardFooter", props: [] },
      { name: "CardDivider", props: [] },
    ],
  },
  {
    slug: "code-block",
    name: "CodeBlock",
    npmPackage: "@kaanolin/react",
    description:
      "Code snippet with optional language badge and a one-click copy button. Renders inside a framed surface.",
    hero: (
      <CodeBlock
        language="tsx"
        code={`import { Button } from "@kaanolin/react/button";

<Button>Click me</Button>`}
      />
    ),
    heroCode: `<CodeBlock
  language="tsx"
  code={\`import { Button } from "@kaanolin/react/button";

<Button>Click me</Button>\`}
/>`,
    importPath: "@kaanolin/react/code-block",
    importSnippet: `import { CodeBlock } from "@kaanolin/react/code-block";`,
    anatomy: `<CodeBlock code="…" language="tsx" />`,
    props: [
      { name: "code", type: "string", typeSimple: "string", required: true, description: "Raw code to render." },
      { name: "language", type: "string", typeSimple: "string", description: "Label shown in the header." },
      { name: "hideHeader", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Hide header, language, and copy button." },
      { name: "hideCopy", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Hide the copy button only." },
      { name: "tone", type: '"neutral" | "subtle" | "inverse"', typeSimple: "enum", defaultValue: '"neutral"', description: "Surface tone." },
    ],
    playground: {
      controls: [
        { prop: "language", type: "select", options: ["tsx", "jsx", "ts", "js", "bash", "css", "json"], defaultValue: "tsx" },
        { prop: "tone", type: "select", options: ["neutral", "subtle", "inverse"], defaultValue: "neutral" },
        { prop: "hideHeader", type: "boolean", defaultValue: false },
        { prop: "hideCopy", type: "boolean", defaultValue: false },
        { prop: "code", type: "text", defaultValue: "const greet = () => \"hello\";" },
      ],
      render: (s) => (
        <CodeBlock
          code={String(s.code)}
          language={String(s.language)}
          tone={s.tone as "neutral" | "subtle" | "inverse"}
          hideHeader={s.hideHeader as boolean}
          hideCopy={s.hideCopy as boolean}
        />
      ),
      toCode: (s) => {
        const parts = [`language="${s.language}"`, `tone="${s.tone}"`];
        if (s.hideHeader) parts.push("hideHeader");
        if (s.hideCopy) parts.push("hideCopy");
        return `<CodeBlock ${parts.join(" ")} code={${JSON.stringify(s.code)}} />`;
      },
    },
  },
  {
    slug: "data-source-badge",
    name: "DataSourceBadge",
    npmPackage: "@kaanolin/react",
    description:
      "Inline attribution badge showing the source of a dataset, optional link, and formatted last-updated date.",
    hero: (
      <div className="flex flex-col gap-2 items-start">
        <DataSourceBadge source="USGS" lastUpdated="2024-06-10" url="https://usgs.gov" />
        <DataSourceBadge source="Eurostat" lastUpdated="2024-02-01" />
      </div>
    ),
    heroCode: `<DataSourceBadge source="USGS" lastUpdated="2024-06-10" url="https://usgs.gov" />
<DataSourceBadge source="Eurostat" lastUpdated="2024-02-01" />`,
    importPath: "@kaanolin/react/data-source-badge",
    importSnippet: `import { DataSourceBadge } from "@kaanolin/react/data-source-badge";`,
    anatomy: `<DataSourceBadge source="USGS" lastUpdated="2024-06-10" url="https://usgs.gov" />`,
    props: [
      { name: "source", type: "string", typeSimple: "string", required: true, description: "Name of the data source." },
      { name: "lastUpdated", type: "string", typeSimple: "string", description: "ISO date string; rendered in localized short form." },
      { name: "url", type: "string", typeSimple: "string", description: "Optional URL — makes the source name a link." },
      { name: "locale", type: "string", typeSimple: "string", defaultValue: '"en-US"', description: "BCP 47 locale for date formatting." },
    ],
  },
  {
    slug: "empty-state",
    name: "EmptyState",
    npmPackage: "@kaanolin/react",
    description:
      "Friendly placeholder shown when a list, search or feature has no data yet. Composes icon, title, description and actions slots.",
    hero: (
      <EmptyState>
        <EmptyStateIcon>
          <FeaturedIcon color="brand" size="lg">
            <SearchLg />
          </FeaturedIcon>
        </EmptyStateIcon>
        <EmptyStateTitle>No results found</EmptyStateTitle>
        <EmptyStateDescription>Try adjusting your search terms.</EmptyStateDescription>
        <EmptyStateActions>
          <Button variant="secondary">Clear filters</Button>
          <Button>New search</Button>
        </EmptyStateActions>
      </EmptyState>
    ),
    heroCode: `<EmptyState>
  <EmptyStateIcon>
    <FeaturedIcon color="brand" size="lg"><SearchLg /></FeaturedIcon>
  </EmptyStateIcon>
  <EmptyStateTitle>No results found</EmptyStateTitle>
  <EmptyStateDescription>Try adjusting your search terms.</EmptyStateDescription>
  <EmptyStateActions>
    <Button variant="secondary">Clear filters</Button>
    <Button>New search</Button>
  </EmptyStateActions>
</EmptyState>`,
    importPath: "@kaanolin/react/empty-state",
    importSnippet: `import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateActions } from "@kaanolin/react/empty-state";`,
    anatomy: `<EmptyState>
  <EmptyStateIcon>…</EmptyStateIcon>
  <EmptyStateTitle>Title</EmptyStateTitle>
  <EmptyStateDescription>Description</EmptyStateDescription>
  <EmptyStateActions>…</EmptyStateActions>
</EmptyState>`,
    props: [],
    subComponents: [
      { name: "EmptyStateIcon", props: [] },
      { name: "EmptyStateTitle", props: [] },
      { name: "EmptyStateDescription", props: [] },
      { name: "EmptyStateActions", props: [] },
    ],
  },
  {
    slug: "featured-icon",
    name: "FeaturedIcon",
    npmPackage: "@kaanolin/react",
    description:
      "Container for 24px icons at larger display sizes. Honors rule #1 of the icon system: don't scale icons above 24px — wrap them instead.",
    hero: (
      <div className="flex gap-4 items-center">
        <FeaturedIcon size="sm" color="brand">
          <Heart />
        </FeaturedIcon>
        <FeaturedIcon size="md" color="success" shape="square">
          <Heart />
        </FeaturedIcon>
        <FeaturedIcon size="lg" color="warning" shape="modern">
          <Heart />
        </FeaturedIcon>
        <FeaturedIcon size="xl" color="error" variant="solid">
          <Heart />
        </FeaturedIcon>
        <FeaturedIcon size="2xl" color="brand" variant="outline">
          <Heart />
        </FeaturedIcon>
      </div>
    ),
    heroCode: `<FeaturedIcon size="sm" color="brand"><Heart /></FeaturedIcon>
<FeaturedIcon size="md" color="success" shape="square"><Heart /></FeaturedIcon>
<FeaturedIcon size="lg" color="warning" shape="modern"><Heart /></FeaturedIcon>
<FeaturedIcon size="xl" color="error" variant="solid"><Heart /></FeaturedIcon>
<FeaturedIcon size="2xl" color="brand" variant="outline"><Heart /></FeaturedIcon>`,
    importPath: "@kaanolin/react/featured-icon",
    importSnippet: `import { FeaturedIcon } from "@kaanolin/react/featured-icon";
import { Heart } from "@kaanolin/react-icons/line/general";`,
    anatomy: `<FeaturedIcon size="xl" shape="circle" color="brand" variant="light">
  <Heart />
</FeaturedIcon>`,
    props: [
      { name: "size", type: '"sm" | "md" | "lg" | "xl" | "2xl"', typeSimple: "enum", defaultValue: '"md"', description: "Container size. The inner icon stays 24px." },
      { name: "shape", type: '"circle" | "square" | "modern"', typeSimple: "enum", defaultValue: '"circle"', description: "Border radius variant." },
      { name: "color", type: '"gray" | "brand" | "error" | "warning" | "success"', typeSimple: "enum", defaultValue: '"brand"', description: "Semantic color tone." },
      { name: "variant", type: '"light" | "outline" | "solid"', typeSimple: "enum", defaultValue: '"light"', description: "Surface treatment." },
    ],
    playground: {
      controls: [
        { prop: "size", type: "select", options: ["sm", "md", "lg", "xl", "2xl"], defaultValue: "xl" },
        { prop: "shape", type: "select", options: ["circle", "square", "modern"], defaultValue: "circle" },
        { prop: "color", type: "select", options: ["gray", "brand", "error", "warning", "success"], defaultValue: "brand" },
        { prop: "variant", type: "select", options: ["light", "outline", "solid"], defaultValue: "light" },
      ],
      render: (s) => (
        <FeaturedIcon
          size={s.size as "sm" | "md" | "lg" | "xl" | "2xl"}
          shape={s.shape as "circle" | "square" | "modern"}
          color={s.color as "gray" | "brand" | "error" | "warning" | "success"}
          variant={s.variant as "light" | "outline" | "solid"}
        >
          <Heart />
        </FeaturedIcon>
      ),
      toCode: (s) =>
        `<FeaturedIcon size="${s.size}" shape="${s.shape}" color="${s.color}" variant="${s.variant}">\n  <Heart />\n</FeaturedIcon>`,
    },
  },
  {
    slug: "kbd",
    name: "Kbd",
    npmPackage: "@kaanolin/react",
    description:
      "Keyboard shortcut token rendered as a small pill with a monospace glyph. Uses the semantic <kbd> element.",
    hero: (
      <div className="flex gap-2 items-center">
        <Kbd size="sm">⌘</Kbd>
        <Kbd>K</Kbd>
        <Kbd size="lg">Enter</Kbd>
        <span className="text-text-secondary text-sm">
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search
        </span>
      </div>
    ),
    heroCode: `<Kbd size="sm">⌘</Kbd>
<Kbd>K</Kbd>
<Kbd size="lg">Enter</Kbd>

Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search`,
    importPath: "@kaanolin/react/kbd",
    importSnippet: `import { Kbd } from "@kaanolin/react/kbd";`,
    anatomy: `<Kbd size="md">⌘K</Kbd>`,
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
    ],
  },
  {
    slug: "progress",
    name: "Progress",
    npmPackage: "@kaanolin/react",
    description:
      "Linear progress bar for indicating completion. Built on Radix Progress.",
    hero: (
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Progress value={30} />
        <Progress value={65} color="success" />
        <Progress value={90} color="warning" size="lg" />
      </div>
    ),
    heroCode: `<Progress value={30} />
<Progress value={65} color="success" />
<Progress value={90} color="warning" size="lg" />`,
    importPath: "@kaanolin/react/progress",
    importSnippet: `import { Progress } from "@kaanolin/react/progress";`,
    anatomy: `<Progress value={75} max={100} color="brand" />`,
    props: [
      { name: "value", type: "number", typeSimple: "number", defaultValue: "0", description: "Current progress value." },
      { name: "max", type: "number", typeSimple: "number", defaultValue: "100", description: "Maximum value." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Track height." },
      { name: "color", type: '"brand" | "success" | "error" | "warning"', typeSimple: "enum", defaultValue: '"brand"', description: "Indicator color." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/",
  },
  {
    slug: "spinner",
    name: "Spinner",
    npmPackage: "@kaanolin/react",
    description:
      "Indeterminate loading indicator rendered as an animated SVG.",
    hero: (
      <div className="flex items-center gap-4">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" color="gray" />
        <Spinner size="xl" color="gray" />
      </div>
    ),
    heroCode: `<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" color="gray" />
<Spinner size="xl" color="gray" />`,
    importPath: "@kaanolin/react/spinner",
    importSnippet: `import { Spinner } from "@kaanolin/react/spinner";`,
    anatomy: `<Spinner size="md" color="brand" label="Loading" />`,
    props: [
      { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "color", type: '"brand" | "gray" | "white"', typeSimple: "enum", defaultValue: '"brand"', description: "Stroke color." },
      { name: "label", type: "string", typeSimple: "string", defaultValue: '"Loading"', description: "Accessible label for screen readers." },
    ],
  },
  {
    slug: "stat-card",
    name: "StatCard",
    npmPackage: "@kaanolin/react",
    description:
      "Summary tile for a single metric. Composes a label, large value, optional delta indicator and description.",
    hero: (
      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
        <StatCard label="Active users" value="12,483" delta="+12%" deltaType="down" />
        <StatCard label="Errors" value="73" delta="+5" deltaType="up" variant="critical" />
      </div>
    ),
    heroCode: `<StatCard label="Active users" value="12,483" delta="+12%" deltaType="down" />
<StatCard label="Errors" value="73" delta="+5" deltaType="up" variant="critical" />`,
    importPath: "@kaanolin/react/stat-card",
    importSnippet: `import { StatCard } from "@kaanolin/react/stat-card";`,
    anatomy: `<StatCard
  label="Revenue"
  value="$42,500"
  delta="+8.2%"
  deltaType="down"
  description="vs. last month"
/>`,
    props: [
      { name: "label", type: "string", typeSimple: "string", required: true, description: "Text above the value." },
      { name: "value", type: "string", typeSimple: "string", required: true, description: "The main metric." },
      { name: "delta", type: "string", typeSimple: "string", description: "Optional delta shown under the value." },
      { name: "deltaType", type: '"up" | "down" | "neutral"', typeSimple: "enum", defaultValue: '"neutral"', description: "Direction of the delta — controls color and arrow." },
      { name: "description", type: "string", typeSimple: "string", description: "Optional description below the value." },
      { name: "variant", type: '"default" | "critical" | "warning" | "success"', typeSimple: "enum", defaultValue: '"default"', description: "Semantic color variant." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
    ],
  },
  {
    slug: "status-dot",
    name: "StatusDot",
    npmPackage: "@kaanolin/react",
    description:
      "Tiny colored dot for conveying status — idle, success, warning, error, info — with optional animated halo for live states.",
    hero: (
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <StatusDot status="success" />
          <span className="text-sm text-text-secondary">Operational</span>
        </div>
        <div className="flex items-center gap-2">
          <StatusDot status="warning" pulse />
          <span className="text-sm text-text-secondary">Degraded</span>
        </div>
        <div className="flex items-center gap-2">
          <StatusDot status="error" size="lg" pulse label="Critical" />
          <span className="text-sm text-text-secondary">Critical</span>
        </div>
      </div>
    ),
    heroCode: `<StatusDot status="success" />
<StatusDot status="warning" pulse />
<StatusDot status="error" size="lg" pulse label="Critical" />`,
    importPath: "@kaanolin/react/status-dot",
    importSnippet: `import { StatusDot } from "@kaanolin/react/status-dot";`,
    anatomy: `<StatusDot status="success" size="md" pulse label="Live" />`,
    props: [
      { name: "status", type: '"success" | "warning" | "error" | "info" | "idle"', typeSimple: "enum", defaultValue: '"idle"', description: "Semantic status color." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "pulse", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Render an outer pulsing halo." },
      { name: "label", type: "string", typeSimple: "string", description: "Accessible label announced to screen readers." },
    ],
  },
  {
    slug: "table",
    name: "Table",
    npmPackage: "@kaanolin/react",
    description:
      "Low-level tabular layout primitives. Compose a full data grid from Table, TableHeader, TableBody, TableRow, TableHead and TableCell.",
    hero: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>
              <Badge color="success" dot>
                Active
              </Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob</TableCell>
            <TableCell>Editor</TableCell>
            <TableCell>
              <Badge color="warning" dot>
                Pending
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    heroCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>Admin</TableCell>
      <TableCell><Badge color="success" dot>Active</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    importPath: "@kaanolin/react/table",
    importSnippet: `import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from "@kaanolin/react/table";`,
    anatomy: `<Table>
  <TableCaption>Caption</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Column</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Totals</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,
    props: [],
    subComponents: [
      { name: "TableHeader", props: [] },
      { name: "TableBody", props: [] },
      { name: "TableFooter", props: [] },
      { name: "TableRow", props: [] },
      { name: "TableHead", props: [] },
      {
        name: "TableCell",
        props: [
          { name: "align", type: '"left" | "center" | "right"', typeSimple: "enum", defaultValue: '"left"', description: "Text alignment inside the cell." },
        ],
      },
      { name: "TableCaption", props: [] },
    ],
  },
  {
    slug: "tag",
    name: "Tag",
    npmPackage: "@kaanolin/react",
    description:
      "Chip for selections, filters, and attributes. Supports leading avatar or icon and optional dismiss button.",
    hero: (
      <div className="flex gap-2 flex-wrap">
        <Tag>Filter</Tag>
        <Tag color="brand">Feature</Tag>
        <Tag dismissible>Dismissible</Tag>
      </div>
    ),
    heroCode: `<Tag>Filter</Tag>
<Tag color="brand">Feature</Tag>
<Tag dismissible>Dismissible</Tag>`,
    importPath: "@kaanolin/react/tag",
    importSnippet: `import { Tag } from "@kaanolin/react/tag";`,
    anatomy: `<Tag color="brand" size="md">Label</Tag>`,
    props: [
      { name: "color", type: "TagColor", typeSimple: "enum", defaultValue: '"gray"', description: "Semantic color." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
      { name: "dismissible", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Show a close button." },
    ],
    playground: {
      controls: [
        { prop: "color", type: "select", options: ["gray", "brand", "error", "warning", "success", "blue", "indigo", "purple", "pink", "orange"], defaultValue: "gray" },
        { prop: "size", type: "select", options: ["sm", "md", "lg"], defaultValue: "md" },
        { prop: "dismissible", type: "boolean", defaultValue: false },
        { prop: "children", label: "label", type: "text", defaultValue: "Label" },
      ],
      render: (s) => (
        <Tag
          color={s.color as "gray" | "brand" | "error" | "warning" | "success" | "blue" | "indigo" | "purple" | "pink" | "orange"}
          size={s.size as "sm" | "md" | "lg"}
          dismissible={s.dismissible as boolean}
        >
          {String(s.children)}
        </Tag>
      ),
      toCode: (s) => {
        const parts = [`color="${s.color}"`, `size="${s.size}"`];
        if (s.dismissible) parts.push("dismissible");
        return `<Tag ${parts.join(" ")}>${s.children}</Tag>`;
      },
    },
  },

  /* ==================== NAVIGATION ==================== */
  {
    slug: "button-group",
    name: "ButtonGroup",
    npmPackage: "@kaanolin/react",
    description:
      "Segmented control for mutually exclusive (single) or multi-select (multiple) options. Built on Radix ToggleGroup.",
    hero: <ButtonGroupDemo />,
    heroCode: `const [value, setValue] = React.useState("left");

<ButtonGroup type="single" value={value} onValueChange={(v) => v && setValue(v as string)}>
  <ButtonGroupItem value="left">Left</ButtonGroupItem>
  <ButtonGroupItem value="center">Center</ButtonGroupItem>
  <ButtonGroupItem value="right">Right</ButtonGroupItem>
</ButtonGroup>`,
    importPath: "@kaanolin/react/button-group",
    importSnippet: `import { ButtonGroup, ButtonGroupItem } from "@kaanolin/react/button-group";`,
    anatomy: `<ButtonGroup type="single" defaultValue="a">
  <ButtonGroupItem value="a">A</ButtonGroupItem>
  <ButtonGroupItem value="b">B</ButtonGroupItem>
</ButtonGroup>`,
    props: [
      { name: "type", type: '"single" | "multiple"', typeSimple: "enum", required: true, description: "Selection mode." },
      { name: "value", type: "string | string[]", typeSimple: "string", description: "Controlled value." },
      { name: "defaultValue", type: "string | string[]", typeSimple: "string", description: "Uncontrolled default." },
      { name: "onValueChange", type: "(value: string | string[]) => void", typeSimple: "function", description: "Called when the value changes." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Size applied to every item." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the entire group." },
    ],
    subComponents: [
      {
        name: "ButtonGroupItem",
        props: [
          { name: "value", type: "string", typeSimple: "string", required: true, description: "Unique item value." },
          { name: "icon", type: "React.ComponentType<SVGProps<SVGSVGElement>>", typeSimple: "function", description: "Leading icon." },
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable this item." },
        ],
      },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",
    keyboard: [
      { keys: ["ArrowLeft", "ArrowRight"], description: "Move focus between items." },
      { keys: ["Space", "Enter"], description: "Toggle the focused item." },
    ],
  },
  {
    slug: "dropdown",
    name: "Dropdown",
    npmPackage: "@kaanolin/react",
    description:
      "Action menu triggered from any element. Supports items, checkbox/radio items, submenus, separators and keyboard shortcuts. Built on Radix DropdownMenu.",
    hero: <DropdownDemo />,
    heroCode: `<Dropdown>
  <DropdownTrigger asChild>
    <Button variant="secondary">Actions</Button>
  </DropdownTrigger>
  <DropdownContent align="start">
    <DropdownItem>View</DropdownItem>
    <DropdownItem>Edit</DropdownItem>
    <DropdownSeparator />
    <DropdownItem destructive>Delete</DropdownItem>
  </DropdownContent>
</Dropdown>`,
    importPath: "@kaanolin/react/dropdown",
    importSnippet: `import {
  Dropdown, DropdownTrigger, DropdownContent, DropdownItem,
  DropdownCheckboxItem, DropdownRadioItem, DropdownRadioGroup,
  DropdownLabel, DropdownSeparator,
  DropdownSub, DropdownSubTrigger, DropdownSubContent, DropdownGroup,
} from "@kaanolin/react/dropdown";`,
    anatomy: `<Dropdown>
  <DropdownTrigger asChild><Button /></DropdownTrigger>
  <DropdownContent>
    <DropdownLabel>Label</DropdownLabel>
    <DropdownItem icon={<Icon />} shortcut="⌘E">Edit</DropdownItem>
    <DropdownCheckboxItem checked>Show grid</DropdownCheckboxItem>
    <DropdownSeparator />
    <DropdownSub>
      <DropdownSubTrigger>More</DropdownSubTrigger>
      <DropdownSubContent><DropdownItem>Nested</DropdownItem></DropdownSubContent>
    </DropdownSub>
    <DropdownItem destructive>Delete</DropdownItem>
  </DropdownContent>
</Dropdown>`,
    props: [],
    subComponents: [
      {
        name: "DropdownContent",
        props: [
          { name: "sideOffset", type: "number", typeSimple: "number", defaultValue: "4", description: "Distance from the trigger." },
          { name: "container", type: "HTMLElement", typeSimple: "HTMLElement", description: "Portal container (defaults to document.body)." },
        ],
      },
      {
        name: "DropdownItem",
        props: [
          { name: "destructive", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Render in danger style." },
          { name: "icon", type: "ReactNode", typeSimple: "ReactNode", description: "Leading icon." },
          { name: "shortcut", type: "string", typeSimple: "string", description: "Keyboard shortcut hint on the right." },
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the item." },
        ],
      },
      {
        name: "DropdownCheckboxItem",
        props: [
          { name: "checked", type: "boolean", typeSimple: "boolean", description: "Controlled checked state." },
          { name: "onCheckedChange", type: "(checked: boolean) => void", typeSimple: "function", description: "Called when toggled." },
        ],
      },
      { name: "DropdownRadioItem", props: [{ name: "value", type: "string", typeSimple: "string", required: true, description: "Radio value." }] },
      { name: "DropdownRadioGroup", props: [{ name: "value", type: "string", typeSimple: "string", description: "Selected value." }, { name: "onValueChange", type: "(value: string) => void", typeSimple: "function", description: "Callback." }] },
      { name: "DropdownLabel", props: [] },
      { name: "DropdownSeparator", props: [] },
      {
        name: "DropdownSubTrigger",
        props: [
          { name: "icon", type: "ReactNode", typeSimple: "ReactNode", description: "Leading icon." },
        ],
      },
      { name: "DropdownSubContent", props: [] },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/menu/",
    keyboard: [
      { keys: ["Enter", "Space"], description: "Open the menu or activate the highlighted item." },
      { keys: ["ArrowDown"], description: "Move focus to the next item." },
      { keys: ["ArrowUp"], description: "Move focus to the previous item." },
      { keys: ["ArrowRight"], description: "Open a submenu." },
      { keys: ["ArrowLeft"], description: "Close the submenu." },
      { keys: ["Escape"], description: "Close the menu." },
    ],
  },
  {
    slug: "header-navigation",
    name: "HeaderNav",
    npmPackage: "@kaanolin/react",
    description:
      "Top-of-page nav bar with logo, nav items, and a trailing actions slot. Composes five low-level primitives.",
    hero: (
      <HeaderNav className="w-full max-w-2xl">
        <HeaderNavLogo>
          <span className="font-bold">Acme</span>
        </HeaderNavLogo>
        <HeaderNavItems>
          <HeaderNavItem active>Home</HeaderNavItem>
          <HeaderNavItem>Products</HeaderNavItem>
          <HeaderNavItem>Pricing</HeaderNavItem>
        </HeaderNavItems>
        <HeaderNavActions>
          <Button size="sm" variant="secondary">Sign in</Button>
          <Button size="sm">Sign up</Button>
        </HeaderNavActions>
      </HeaderNav>
    ),
    heroCode: `<HeaderNav>
  <HeaderNavLogo><span className="font-bold">Acme</span></HeaderNavLogo>
  <HeaderNavItems>
    <HeaderNavItem active>Home</HeaderNavItem>
    <HeaderNavItem>Products</HeaderNavItem>
    <HeaderNavItem>Pricing</HeaderNavItem>
  </HeaderNavItems>
  <HeaderNavActions>
    <Button size="sm" variant="secondary">Sign in</Button>
    <Button size="sm">Sign up</Button>
  </HeaderNavActions>
</HeaderNav>`,
    importPath: "@kaanolin/react/header-navigation",
    importSnippet: `import { HeaderNav, HeaderNavLogo, HeaderNavItems, HeaderNavItem, HeaderNavActions } from "@kaanolin/react/header-navigation";`,
    anatomy: `<HeaderNav>
  <HeaderNavLogo>…</HeaderNavLogo>
  <HeaderNavItems>
    <HeaderNavItem active href="/">Home</HeaderNavItem>
  </HeaderNavItems>
  <HeaderNavActions>…</HeaderNavActions>
</HeaderNav>`,
    props: [],
    subComponents: [
      { name: "HeaderNavLogo", props: [] },
      { name: "HeaderNavItems", props: [] },
      {
        name: "HeaderNavItem",
        props: [
          { name: "active", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Whether the item is currently active." },
          { name: "href", type: "string", typeSimple: "string", description: "When set, renders as an anchor." },
        ],
      },
      { name: "HeaderNavActions", props: [] },
    ],
  },
  {
    slug: "pagination",
    name: "Pagination",
    npmPackage: "@kaanolin/react",
    description:
      "Low-level building blocks for page navigation. Compose pages, ellipsis, and previous/next controls.",
    hero: <PaginationDemo />,
    heroCode: `const [page, setPage] = React.useState(1);

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious disabled={page === 1} onClick={() => setPage(p => p - 1)} />
    </PaginationItem>
    {[1, 2, 3, 4, 5].map((n) => (
      <PaginationItem key={n}>
        <PaginationLink isActive={page === n} onClick={() => setPage(n)}>{n}</PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem>
      <PaginationNext disabled={page === 5} onClick={() => setPage(p => p + 1)} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    importPath: "@kaanolin/react/pagination",
    importSnippet: `import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "@kaanolin/react/pagination";`,
    anatomy: `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious /></PaginationItem>
    <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext /></PaginationItem>
  </PaginationContent>
</Pagination>`,
    props: [],
    subComponents: [
      { name: "PaginationContent", props: [] },
      { name: "PaginationItem", props: [] },
      {
        name: "PaginationLink",
        props: [
          { name: "isActive", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Mark this page as current." },
          { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Rendered size." },
        ],
      },
      {
        name: "PaginationPrevious",
        props: [
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable when on the first page." },
        ],
      },
      {
        name: "PaginationNext",
        props: [
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable when on the last page." },
        ],
      },
      { name: "PaginationEllipsis", props: [] },
    ],
    keyboard: [
      { keys: ["Tab"], description: "Move focus between page controls." },
      { keys: ["Enter", "Space"], description: "Activate the focused control." },
    ],
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    npmPackage: "@kaanolin/react",
    description:
      "Vertical app navigation rail with header, grouped items, and footer. Fixed to the left edge.",
    hero: (
      <div className="relative h-64 w-full max-w-sm border border-border-secondary rounded-lg overflow-hidden">
        <Sidebar className="!static !h-full !border-r-0">
          <SidebarHeader>
            <span className="font-semibold">Acme</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarItem active icon={<Home01 className="size-4" />}>
                Home
              </SidebarItem>
              <SidebarItem icon={<SearchLg className="size-4" />} badge={3}>
                Search
              </SidebarItem>
              <SidebarItem icon={<Settings01 className="size-4" />}>
                Settings
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    ),
    heroCode: `<Sidebar>
  <SidebarHeader><span className="font-semibold">Acme</span></SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarItem active icon={<Home01 className="size-4" />}>Home</SidebarItem>
      <SidebarItem icon={<SearchLg className="size-4" />} badge={3}>Search</SidebarItem>
      <SidebarItem icon={<Settings01 className="size-4" />}>Settings</SidebarItem>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>`,
    importPath: "@kaanolin/react/sidebar",
    importSnippet: `import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarItem } from "@kaanolin/react/sidebar";`,
    anatomy: `<Sidebar width="default">
  <SidebarHeader>…</SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>…</SidebarGroupLabel>
      <SidebarItem active icon={<Icon />}>…</SidebarItem>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>…</SidebarFooter>
</Sidebar>`,
    props: [
      { name: "width", type: '"narrow" | "default" | "wide"', typeSimple: "enum", defaultValue: '"default"', description: "Sidebar width." },
    ],
    subComponents: [
      { name: "SidebarHeader", props: [] },
      { name: "SidebarContent", props: [] },
      { name: "SidebarFooter", props: [] },
      { name: "SidebarGroup", props: [] },
      { name: "SidebarGroupLabel", props: [] },
      {
        name: "SidebarItem",
        props: [
          { name: "icon", type: "ReactNode", typeSimple: "ReactNode", description: "Leading icon." },
          { name: "active", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Mark as current." },
          { name: "badge", type: "string | number", typeSimple: "string", description: "Trailing badge value." },
        ],
      },
    ],
  },
  {
    slug: "tabs",
    name: "Tabs",
    npmPackage: "@kaanolin/react",
    description:
      "Switch between related views. Three visual variants (underline, contained, pill) with full keyboard support. Built on Radix Tabs.",
    hero: <TabsDemo />,
    heroCode: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="usage">Usage</TabsTrigger>
    <TabsTrigger value="history">History</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview panel content.</TabsContent>
  <TabsContent value="usage">Usage panel content.</TabsContent>
  <TabsContent value="history">History panel content.</TabsContent>
</Tabs>`,
    importPath: "@kaanolin/react/tabs",
    importSnippet: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@kaanolin/react/tabs";`,
    anatomy: `<Tabs defaultValue="a">
  <TabsList variant="underline" size="md">
    <TabsTrigger value="a" icon={Icon} badge={3}>A</TabsTrigger>
    <TabsTrigger value="b">B</TabsTrigger>
  </TabsList>
  <TabsContent value="a">…</TabsContent>
  <TabsContent value="b">…</TabsContent>
</Tabs>`,
    props: [
      { name: "value", type: "string", typeSimple: "string", description: "Controlled active tab value." },
      { name: "defaultValue", type: "string", typeSimple: "string", description: "Uncontrolled initial tab." },
      { name: "onValueChange", type: "(value: string) => void", typeSimple: "function", description: "Called when the active tab changes." },
      { name: "orientation", type: '"horizontal" | "vertical"', typeSimple: "enum", defaultValue: '"horizontal"', description: "Tab list orientation." },
    ],
    subComponents: [
      {
        name: "TabsList",
        props: [
          { name: "variant", type: '"underline" | "contained" | "pill"', typeSimple: "enum", defaultValue: '"underline"', description: "Visual style." },
          { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "List height and padding." },
          { name: "fullWidth", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Stretch to container width." },
        ],
      },
      {
        name: "TabsTrigger",
        props: [
          { name: "value", type: "string", typeSimple: "string", required: true, description: "The tab value this trigger activates." },
          { name: "icon", type: "React.ComponentType<SVGProps<SVGSVGElement>>", typeSimple: "function", description: "Leading icon." },
          { name: "badge", type: "number", typeSimple: "number", description: "Badge count rendered after the label." },
          { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable this tab." },
        ],
      },
      { name: "TabsContent", props: [{ name: "value", type: "string", typeSimple: "string", required: true, description: "The tab value this panel is associated with." }] },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
    keyboard: [
      { keys: ["ArrowLeft", "ArrowRight"], description: "Move focus between tabs (horizontal)." },
      { keys: ["ArrowUp", "ArrowDown"], description: "Move focus between tabs (vertical)." },
      { keys: ["Home"], description: "Focus the first tab." },
      { keys: ["End"], description: "Focus the last tab." },
      { keys: ["Enter", "Space"], description: "Activate the focused tab." },
    ],
  },

  /* ==================== OVERLAYS ==================== */
  {
    slug: "modal",
    name: "Modal",
    npmPackage: "@kaanolin/react",
    description:
      "Centered dialog for confirmations and short flows. Composable header, body and footer. Scrolls the body when content is tall.",
    hero: <ModalDemo />,
    heroCode: `const [open, setOpen] = React.useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>
<Modal open={open} onOpenChange={setOpen}>
  <ModalHeader onClose={() => setOpen(false)}>
    <ModalTitle>Confirm action</ModalTitle>
  </ModalHeader>
  <ModalBody>This action will apply changes immediately.</ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={() => setOpen(false)}>Confirm</Button>
  </ModalFooter>
</Modal>`,
    importPath: "@kaanolin/react/modal",
    importSnippet: `import { Modal, ModalHeader, ModalIcon, ModalTitle, ModalDescription, ModalBody, ModalFooter, ModalDivider } from "@kaanolin/react/modal";`,
    anatomy: `<Modal open={open} onOpenChange={setOpen} size="md">
  <ModalHeader onClose={() => setOpen(false)} icon={<ModalIcon>…</ModalIcon>}>
    <ModalTitle>Title</ModalTitle>
    <ModalDescription>Description</ModalDescription>
  </ModalHeader>
  <ModalBody>…</ModalBody>
  <ModalDivider />
  <ModalFooter>…</ModalFooter>
</Modal>`,
    props: [
      { name: "open", type: "boolean", typeSimple: "boolean", required: true, description: "Whether the modal is open." },
      { name: "onOpenChange", type: "(open: boolean) => void", typeSimple: "function", required: true, description: "Called when the user requests close (X, overlay, Escape)." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Maximum width." },
      { name: "closeOnOverlayClick", type: "boolean", typeSimple: "boolean", defaultValue: "true", description: "Whether clicking the backdrop closes the modal." },
    ],
    subComponents: [
      {
        name: "ModalHeader",
        props: [
          { name: "onClose", type: "() => void", typeSimple: "function", description: "When provided, renders an X close button." },
          { name: "icon", type: "ReactNode", typeSimple: "ReactNode", description: "Featured icon element." },
        ],
      },
      {
        name: "ModalIcon",
        description: "Featured-icon container tinted by the variant prop.",
        props: [
          { name: "variant", type: '"brand" | "success" | "error" | "warning" | "gray"', typeSimple: "enum", defaultValue: '"brand"', description: "Color tone." },
          { name: "size", type: '"sm" | "md"', typeSimple: "enum", defaultValue: '"md"', description: "Icon container size." },
        ],
      },
      { name: "ModalTitle", props: [] },
      { name: "ModalDescription", props: [] },
      { name: "ModalBody", props: [] },
      { name: "ModalFooter", props: [] },
      { name: "ModalDivider", props: [] },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
    keyboard: [
      { keys: ["Escape"], description: "Close the modal." },
      { keys: ["Tab"], description: "Cycle focus through focusable children." },
    ],
  },
  {
    slug: "sheet",
    name: "Sheet",
    npmPackage: "@kaanolin/react",
    description:
      "Side panel that slides in from any edge for secondary flows. Built on Radix Dialog.",
    hero: <SheetDemo />,
    heroCode: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="secondary">Open sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Manage your preferences.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
    importPath: "@kaanolin/react/sheet",
    importSnippet: `import { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@kaanolin/react/sheet";`,
    anatomy: `<Sheet>
  <SheetTrigger asChild><Button /></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    <div className="p-6">…</div>
    <SheetFooter>…</SheetFooter>
  </SheetContent>
</Sheet>`,
    props: [
      { name: "open", type: "boolean", typeSimple: "boolean", description: "Controlled open state." },
      { name: "defaultOpen", type: "boolean", typeSimple: "boolean", description: "Uncontrolled initial open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", typeSimple: "function", description: "Called when the open state changes." },
      { name: "modal", type: "boolean", typeSimple: "boolean", defaultValue: "true", description: "Whether the sheet traps focus." },
    ],
    subComponents: [
      {
        name: "SheetContent",
        props: [
          { name: "side", type: '"top" | "right" | "bottom" | "left"', typeSimple: "enum", defaultValue: '"right"', description: "Which edge the sheet slides from." },
        ],
      },
      { name: "SheetHeader", props: [] },
      { name: "SheetTitle", props: [] },
      { name: "SheetDescription", props: [] },
      { name: "SheetFooter", props: [] },
      { name: "SheetTrigger", props: [] },
      { name: "SheetClose", props: [] },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
    keyboard: [
      { keys: ["Escape"], description: "Close the sheet." },
      { keys: ["Tab"], description: "Cycle focus through focusable children." },
    ],
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    npmPackage: "@kaanolin/react",
    description:
      "Contextual popover that appears on hover or focus. Supports a title and optional description. Built on Radix Tooltip.",
    hero: <TooltipDemo />,
    heroCode: `<Tooltip content="Save the document">
  <Button variant="secondary">Save</Button>
</Tooltip>
<Tooltip content="More info" description="Extended description goes here." side="right">
  <Button variant="tertiary">Hover me</Button>
</Tooltip>`,
    importPath: "@kaanolin/react/tooltip",
    importSnippet: `import { Tooltip } from "@kaanolin/react/tooltip";`,
    anatomy: `<Tooltip content="Title" description="Optional description" side="top">
  <Button />
</Tooltip>`,
    props: [
      { name: "content", type: "string", typeSimple: "string", required: true, description: "Tooltip title." },
      { name: "description", type: "string", typeSimple: "string", description: "Optional secondary text." },
      { name: "side", type: '"top" | "right" | "bottom" | "left"', typeSimple: "enum", defaultValue: '"top"', description: "Which side the tooltip appears on." },
      { name: "sideOffset", type: "number", typeSimple: "number", defaultValue: "4", description: "Distance from the trigger in px." },
      { name: "delayDuration", type: "number", typeSimple: "number", defaultValue: "200", description: "Delay in ms before showing." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
    keyboard: [
      { keys: ["Escape"], description: "Dismiss the tooltip while focus remains on the trigger." },
    ],
  },

  /* ==================== EDITOR / MEDIA ==================== */
  {
    slug: "text-editor",
    name: "TextEditor",
    npmPackage: "@kaanolin/react",
    description:
      "Rich-text editor with a built-in toolbar (bold, italic, headings, lists, links, undo/redo). Backed by Tiptap — swap in custom extensions when needed.",
    hero: <TextEditorDemo />,
    heroCode: `const [content, setContent] = React.useState("<p>Hello <strong>world</strong>.</p>");

<TextEditor content={content} onContentChange={setContent} placeholder="Start writing..." />`,
    importPath: "@kaanolin/react/text-editor",
    importSnippet: `import { TextEditor, TextEditorToolbar } from "@kaanolin/react/text-editor";`,
    anatomy: `<TextEditor
  label="Description"
  defaultContent="<p>Initial content</p>"
  onContentChange={(html) => save(html)}
  placeholder="Write…"
/>`,
    props: [
      { name: "content", type: "string", typeSimple: "string", description: "Controlled HTML content." },
      { name: "defaultContent", type: "string", typeSimple: "string", description: "Uncontrolled default HTML content." },
      { name: "onContentChange", type: "(html: string) => void", typeSimple: "function", description: "Called when the content changes." },
      { name: "placeholder", type: "string", typeSimple: "string", description: "Placeholder text shown when empty." },
      { name: "label", type: "string", typeSimple: "string", description: "Label above the editor." },
      { name: "helperText", type: "string", typeSimple: "string", description: "Helper text below the editor." },
      { name: "tooltip", type: "string", typeSimple: "string", description: "Tooltip on the label." },
      { name: "variant", type: '"default" | "error"', typeSimple: "enum", defaultValue: '"default"', description: "Visual state." },
      { name: "disabled", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Disable the editor." },
      { name: "editable", type: "boolean", typeSimple: "boolean", defaultValue: "true", description: "Whether the content is editable." },
      { name: "isRequired", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Mark the field as required." },
      { name: "extensions", type: "Extension[]", typeSimple: "Extension[]", description: "Tiptap extensions overriding the defaults." },
    ],
    subComponents: [
      {
        name: "TextEditorToolbar",
        description: "Wrapper for a custom toolbar rendered as children of TextEditor.",
        props: [],
      },
    ],
    keyboard: [
      { keys: ["⌘/Ctrl + B"], description: "Bold." },
      { keys: ["⌘/Ctrl + I"], description: "Italic." },
      { keys: ["⌘/Ctrl + U"], description: "Underline." },
      { keys: ["⌘/Ctrl + Z"], description: "Undo." },
      { keys: ["⌘/Ctrl + Shift + Z"], description: "Redo." },
    ],
  },
  {
    slug: "video-player",
    name: "VideoPlayer",
    npmPackage: "@kaanolin/react",
    description:
      "Themed HTML5 video player with custom controls, seek bar, volume, and buffering overlay.",
    hero: <VideoPlayerDemo />,
    heroCode: `<VideoPlayer
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  poster="https://www.w3schools.com/html/pic_trulli.jpg"
  aspectRatio="16/9"
/>`,
    importPath: "@kaanolin/react/video-player",
    importSnippet: `import { VideoPlayer } from "@kaanolin/react/video-player";`,
    anatomy: `<VideoPlayer src="/video.mp4" poster="/poster.jpg" aspectRatio="16/9" />`,
    props: [
      { name: "src", type: "string", typeSimple: "string", required: true, description: "Video source URL." },
      { name: "poster", type: "string", typeSimple: "string", description: "Poster image URL." },
      { name: "aspectRatio", type: '"16/9" | "4/3" | "1/1" | "21/9"', typeSimple: "enum", defaultValue: '"16/9"', description: "Video aspect ratio." },
      { name: "autoPlay", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Start playback on mount." },
      { name: "loop", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Loop the video." },
      { name: "muted", type: "boolean", typeSimple: "boolean", defaultValue: "false", description: "Start muted." },
      { name: "onPlay", type: "(e: SyntheticEvent<HTMLVideoElement>) => void", typeSimple: "function", description: "Called when playback starts." },
      { name: "onPause", type: "(e: SyntheticEvent<HTMLVideoElement>) => void", typeSimple: "function", description: "Called when playback pauses." },
      { name: "onEnded", type: "(e: SyntheticEvent<HTMLVideoElement>) => void", typeSimple: "function", description: "Called when the video ends." },
      { name: "onTimeUpdate", type: "(e: SyntheticEvent<HTMLVideoElement>) => void", typeSimple: "function", description: "Called on time updates during playback." },
    ],
  },

  /* ==================== SPECIALIZED ==================== */
  {
    slug: "map-layer-toggle",
    name: "MapLayerToggle",
    npmPackage: "@kaanolin/react",
    description:
      "Segmented control tailored for map layer selection — one active layer at a time, with icons and horizontal or vertical layout.",
    hero: <MapLayerToggleDemo />,
    heroCode: `const [active, setActive] = React.useState("streets");

<MapLayerToggle
  activeLayer={active}
  onLayerChange={setActive}
  layers={[
    { id: "streets", label: "Streets", icon: Map01 },
    { id: "satellite", label: "Satellite", icon: Globe01 },
    { id: "terrain", label: "Terrain", icon: MarkerPin01 },
  ]}
/>`,
    importPath: "@kaanolin/react/map-layer-toggle",
    importSnippet: `import { MapLayerToggle } from "@kaanolin/react/map-layer-toggle";
import type { MapLayer } from "@kaanolin/react/map-layer-toggle";`,
    anatomy: `<MapLayerToggle
  activeLayer={active}
  onLayerChange={setActive}
  layers={[{ id: "streets", label: "Streets", icon: Map01 }]}
/>`,
    props: [
      { name: "layers", type: "MapLayer[]", typeSimple: "MapLayer[]", required: true, description: "Available layers ({ id, label, icon? })." },
      { name: "activeLayer", type: "string", typeSimple: "string", required: true, description: "ID of the currently active layer." },
      { name: "onLayerChange", type: "(layerId: string) => void", typeSimple: "function", required: true, description: "Called when the user selects a new layer." },
      { name: "orientation", type: '"horizontal" | "vertical"', typeSimple: "enum", defaultValue: '"horizontal"', description: "Layout direction." },
      { name: "size", type: '"sm" | "md" | "lg"', typeSimple: "enum", defaultValue: '"md"', description: "Item size." },
    ],
    aria: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/",
    keyboard: [
      { keys: ["Tab"], description: "Move focus to the toggle." },
      { keys: ["Enter", "Space"], description: "Activate the focused layer." },
    ],
  },
];

export const componentsBySlug = new Map(components.map((c) => [c.slug, c]));
