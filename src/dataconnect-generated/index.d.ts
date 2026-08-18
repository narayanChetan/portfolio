import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddProjectCategoryData {
  projectCategory_insert: ProjectCategory_Key;
}

export interface AddProjectCategoryVariables {
  projectId: UUIDString;
  categoryId: UUIDString;
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCategoryVariables {
  name: string;
  colorCode?: string | null;
}

export interface CreateLinkData {
  link_insert: Link_Key;
}

export interface CreateLinkVariables {
  platformName: string;
  url: string;
  iconType?: string | null;
}

export interface CreateProfileDataData {
  profile_insert: Profile_Key;
}

export interface CreateProfileDataVariables {
  fullName: string;
  tagline: string;
  bio: string;
  avatarUrl?: string | null;
  email?: string | null;
  location?: string | null;
}

export interface CreateProjectData {
  project_insert: Project_Key;
}

export interface CreateProjectVariables {
  title: string;
  description: string;
  displayOrder: number;
  imageUrl?: string | null;
  projectUrl?: string | null;
  repositoryUrl?: string | null;
  isPublished?: boolean | null;
}

export interface CreateSkillData {
  skill_insert: Skill_Key;
}

export interface CreateSkillVariables {
  name: string;
  proficiencyLevel: string;
}

export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}

export interface DeleteCategoryVariables {
  id: UUIDString;
}

export interface DeleteLinkData {
  link_delete?: Link_Key | null;
}

export interface DeleteLinkVariables {
  id: UUIDString;
}

export interface DeleteMyProfileData {
  profile_delete?: Profile_Key | null;
}

export interface DeleteProjectData {
  project_delete?: Project_Key | null;
}

export interface DeleteProjectVariables {
  id: UUIDString;
}

export interface DeleteSkillData {
  skill_delete?: Skill_Key | null;
}

export interface DeleteSkillVariables {
  id: UUIDString;
}

export interface GetCategoryData {
  category?: {
    name: string;
    colorCode?: string | null;
  };
}

export interface GetCategoryVariables {
  id: UUIDString;
}

export interface GetLinkData {
  link?: {
    platformName: string;
    url: string;
  };
}

export interface GetLinkVariables {
  id: UUIDString;
}

export interface GetMyProfileData {
  profile?: {
    fullName: string;
    tagline: string;
    bio: string;
    avatarUrl?: string | null;
    email?: string | null;
    location?: string | null;
  };
}

export interface GetProjectData {
  project?: {
    title: string;
    description: string;
    projectUrl?: string | null;
  };
}

export interface GetProjectVariables {
  id: UUIDString;
}

export interface GetSkillData {
  skill?: {
    name: string;
    proficiencyLevel: string;
  };
}

export interface GetSkillVariables {
  id: UUIDString;
}

export interface Link_Key {
  id: UUIDString;
  __typename?: 'Link_Key';
}

export interface ListAllProfilesData {
  profiles: ({
    fullName: string;
    tagline: string;
    avatarUrl?: string | null;
  })[];
}

export interface ListCategoriesData {
  categories: ({
    name: string;
    colorCode?: string | null;
  })[];
}

export interface ListMyLinksData {
  links: ({
    platformName: string;
    url: string;
  })[];
}

export interface ListMyProjectsData {
  projects: ({
    title: string;
    isPublished?: boolean | null;
  })[];
}

export interface ListMySkillsData {
  skills: ({
    name: string;
    proficiencyLevel: string;
  })[];
}

export interface ListProjectCategoriesData {
  projectCategories: ({
    projectId: UUIDString;
    categoryId: UUIDString;
  } & ProjectCategory_Key)[];
}

export interface Profile_Key {
  id: UUIDString;
  __typename?: 'Profile_Key';
}

export interface ProjectCategory_Key {
  projectId: UUIDString;
  categoryId: UUIDString;
  __typename?: 'ProjectCategory_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface RemoveProjectCategoryData {
  projectCategory_delete?: ProjectCategory_Key | null;
}

export interface RemoveProjectCategoryVariables {
  projectId: UUIDString;
  categoryId: UUIDString;
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}

export interface UpdateCategoryVariables {
  id: UUIDString;
  name?: string | null;
  colorCode?: string | null;
}

export interface UpdateLinkData {
  link_update?: Link_Key | null;
}

export interface UpdateLinkVariables {
  id: UUIDString;
  platformName?: string | null;
  url?: string | null;
  iconType?: string | null;
}

export interface UpdateMyProfileData {
  profile_update?: Profile_Key | null;
}

export interface UpdateMyProfileVariables {
  fullName?: string | null;
  tagline?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
  email?: string | null;
  location?: string | null;
}

export interface UpdateProjectData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
  displayOrder?: number | null;
  imageUrl?: string | null;
  projectUrl?: string | null;
  repositoryUrl?: string | null;
  isPublished?: boolean | null;
}

export interface UpdateSkillData {
  skill_update?: Skill_Key | null;
}

export interface UpdateSkillVariables {
  id: UUIDString;
  name?: string | null;
  proficiencyLevel?: string | null;
}

interface CreateProfileDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProfileDataVariables): MutationRef<CreateProfileDataData, CreateProfileDataVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProfileDataVariables): MutationRef<CreateProfileDataData, CreateProfileDataVariables>;
  operationName: string;
}
export const createProfileDataRef: CreateProfileDataRef;

export function createProfileData(vars: CreateProfileDataVariables): MutationPromise<CreateProfileDataData, CreateProfileDataVariables>;
export function createProfileData(dc: DataConnect, vars: CreateProfileDataVariables): MutationPromise<CreateProfileDataData, CreateProfileDataVariables>;

interface UpdateMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateMyProfileVariables): MutationRef<UpdateMyProfileData, UpdateMyProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateMyProfileVariables): MutationRef<UpdateMyProfileData, UpdateMyProfileVariables>;
  operationName: string;
}
export const updateMyProfileRef: UpdateMyProfileRef;

export function updateMyProfile(vars?: UpdateMyProfileVariables): MutationPromise<UpdateMyProfileData, UpdateMyProfileVariables>;
export function updateMyProfile(dc: DataConnect, vars?: UpdateMyProfileVariables): MutationPromise<UpdateMyProfileData, UpdateMyProfileVariables>;

interface DeleteMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteMyProfileData, undefined>;
  operationName: string;
}
export const deleteMyProfileRef: DeleteMyProfileRef;

export function deleteMyProfile(): MutationPromise<DeleteMyProfileData, undefined>;
export function deleteMyProfile(dc: DataConnect): MutationPromise<DeleteMyProfileData, undefined>;

interface GetMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
  operationName: string;
}
export const getMyProfileRef: GetMyProfileRef;

export function getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;
export function getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface ListAllProfilesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllProfilesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllProfilesData, undefined>;
  operationName: string;
}
export const listAllProfilesRef: ListAllProfilesRef;

export function listAllProfiles(options?: ExecuteQueryOptions): QueryPromise<ListAllProfilesData, undefined>;
export function listAllProfiles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllProfilesData, undefined>;

interface CreateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  operationName: string;
}
export const createProjectRef: CreateProjectRef;

export function createProject(vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;
export function createProject(dc: DataConnect, vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;

interface UpdateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectVariables): MutationRef<UpdateProjectData, UpdateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectVariables): MutationRef<UpdateProjectData, UpdateProjectVariables>;
  operationName: string;
}
export const updateProjectRef: UpdateProjectRef;

export function updateProject(vars: UpdateProjectVariables): MutationPromise<UpdateProjectData, UpdateProjectVariables>;
export function updateProject(dc: DataConnect, vars: UpdateProjectVariables): MutationPromise<UpdateProjectData, UpdateProjectVariables>;

interface DeleteProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  operationName: string;
}
export const deleteProjectRef: DeleteProjectRef;

export function deleteProject(vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;
export function deleteProject(dc: DataConnect, vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;

interface GetProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProjectVariables): QueryRef<GetProjectData, GetProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProjectVariables): QueryRef<GetProjectData, GetProjectVariables>;
  operationName: string;
}
export const getProjectRef: GetProjectRef;

export function getProject(vars: GetProjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectData, GetProjectVariables>;
export function getProject(dc: DataConnect, vars: GetProjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectData, GetProjectVariables>;

interface ListMyProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyProjectsData, undefined>;
  operationName: string;
}
export const listMyProjectsRef: ListMyProjectsRef;

export function listMyProjects(options?: ExecuteQueryOptions): QueryPromise<ListMyProjectsData, undefined>;
export function listMyProjects(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyProjectsData, undefined>;

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface UpdateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  operationName: string;
}
export const updateCategoryRef: UpdateCategoryRef;

export function updateCategory(vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;
export function updateCategory(dc: DataConnect, vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

interface DeleteCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  operationName: string;
}
export const deleteCategoryRef: DeleteCategoryRef;

export function deleteCategory(vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;
export function deleteCategory(dc: DataConnect, vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;

interface GetCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCategoryVariables): QueryRef<GetCategoryData, GetCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCategoryVariables): QueryRef<GetCategoryData, GetCategoryVariables>;
  operationName: string;
}
export const getCategoryRef: GetCategoryRef;

export function getCategory(vars: GetCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, GetCategoryVariables>;
export function getCategory(dc: DataConnect, vars: GetCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, GetCategoryVariables>;

interface ListCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCategoriesData, undefined>;
  operationName: string;
}
export const listCategoriesRef: ListCategoriesRef;

export function listCategories(options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;
export function listCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface CreateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  operationName: string;
}
export const createSkillRef: CreateSkillRef;

export function createSkill(vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;
export function createSkill(dc: DataConnect, vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;

interface UpdateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  operationName: string;
}
export const updateSkillRef: UpdateSkillRef;

export function updateSkill(vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;
export function updateSkill(dc: DataConnect, vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;

interface DeleteSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSkillVariables): MutationRef<DeleteSkillData, DeleteSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSkillVariables): MutationRef<DeleteSkillData, DeleteSkillVariables>;
  operationName: string;
}
export const deleteSkillRef: DeleteSkillRef;

export function deleteSkill(vars: DeleteSkillVariables): MutationPromise<DeleteSkillData, DeleteSkillVariables>;
export function deleteSkill(dc: DataConnect, vars: DeleteSkillVariables): MutationPromise<DeleteSkillData, DeleteSkillVariables>;

interface GetSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSkillVariables): QueryRef<GetSkillData, GetSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSkillVariables): QueryRef<GetSkillData, GetSkillVariables>;
  operationName: string;
}
export const getSkillRef: GetSkillRef;

export function getSkill(vars: GetSkillVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillData, GetSkillVariables>;
export function getSkill(dc: DataConnect, vars: GetSkillVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillData, GetSkillVariables>;

interface ListMySkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySkillsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMySkillsData, undefined>;
  operationName: string;
}
export const listMySkillsRef: ListMySkillsRef;

export function listMySkills(options?: ExecuteQueryOptions): QueryPromise<ListMySkillsData, undefined>;
export function listMySkills(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySkillsData, undefined>;

interface CreateLinkRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLinkVariables): MutationRef<CreateLinkData, CreateLinkVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateLinkVariables): MutationRef<CreateLinkData, CreateLinkVariables>;
  operationName: string;
}
export const createLinkRef: CreateLinkRef;

export function createLink(vars: CreateLinkVariables): MutationPromise<CreateLinkData, CreateLinkVariables>;
export function createLink(dc: DataConnect, vars: CreateLinkVariables): MutationPromise<CreateLinkData, CreateLinkVariables>;

interface UpdateLinkRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLinkVariables): MutationRef<UpdateLinkData, UpdateLinkVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateLinkVariables): MutationRef<UpdateLinkData, UpdateLinkVariables>;
  operationName: string;
}
export const updateLinkRef: UpdateLinkRef;

export function updateLink(vars: UpdateLinkVariables): MutationPromise<UpdateLinkData, UpdateLinkVariables>;
export function updateLink(dc: DataConnect, vars: UpdateLinkVariables): MutationPromise<UpdateLinkData, UpdateLinkVariables>;

interface DeleteLinkRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLinkVariables): MutationRef<DeleteLinkData, DeleteLinkVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteLinkVariables): MutationRef<DeleteLinkData, DeleteLinkVariables>;
  operationName: string;
}
export const deleteLinkRef: DeleteLinkRef;

export function deleteLink(vars: DeleteLinkVariables): MutationPromise<DeleteLinkData, DeleteLinkVariables>;
export function deleteLink(dc: DataConnect, vars: DeleteLinkVariables): MutationPromise<DeleteLinkData, DeleteLinkVariables>;

interface GetLinkRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLinkVariables): QueryRef<GetLinkData, GetLinkVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLinkVariables): QueryRef<GetLinkData, GetLinkVariables>;
  operationName: string;
}
export const getLinkRef: GetLinkRef;

export function getLink(vars: GetLinkVariables, options?: ExecuteQueryOptions): QueryPromise<GetLinkData, GetLinkVariables>;
export function getLink(dc: DataConnect, vars: GetLinkVariables, options?: ExecuteQueryOptions): QueryPromise<GetLinkData, GetLinkVariables>;

interface ListMyLinksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyLinksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyLinksData, undefined>;
  operationName: string;
}
export const listMyLinksRef: ListMyLinksRef;

export function listMyLinks(options?: ExecuteQueryOptions): QueryPromise<ListMyLinksData, undefined>;
export function listMyLinks(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyLinksData, undefined>;

interface AddProjectCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddProjectCategoryVariables): MutationRef<AddProjectCategoryData, AddProjectCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddProjectCategoryVariables): MutationRef<AddProjectCategoryData, AddProjectCategoryVariables>;
  operationName: string;
}
export const addProjectCategoryRef: AddProjectCategoryRef;

export function addProjectCategory(vars: AddProjectCategoryVariables): MutationPromise<AddProjectCategoryData, AddProjectCategoryVariables>;
export function addProjectCategory(dc: DataConnect, vars: AddProjectCategoryVariables): MutationPromise<AddProjectCategoryData, AddProjectCategoryVariables>;

interface RemoveProjectCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveProjectCategoryVariables): MutationRef<RemoveProjectCategoryData, RemoveProjectCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveProjectCategoryVariables): MutationRef<RemoveProjectCategoryData, RemoveProjectCategoryVariables>;
  operationName: string;
}
export const removeProjectCategoryRef: RemoveProjectCategoryRef;

export function removeProjectCategory(vars: RemoveProjectCategoryVariables): MutationPromise<RemoveProjectCategoryData, RemoveProjectCategoryVariables>;
export function removeProjectCategory(dc: DataConnect, vars: RemoveProjectCategoryVariables): MutationPromise<RemoveProjectCategoryData, RemoveProjectCategoryVariables>;

interface ListProjectCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectCategoriesData, undefined>;
  operationName: string;
}
export const listProjectCategoriesRef: ListProjectCategoriesRef;

export function listProjectCategories(options?: ExecuteQueryOptions): QueryPromise<ListProjectCategoriesData, undefined>;
export function listProjectCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProjectCategoriesData, undefined>;

