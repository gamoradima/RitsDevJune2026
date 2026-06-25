namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a754ba40-dc04-40c1-b15e-c9d01450fcac");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ff4cbc16-aad7-4e81-93df-3f39659dc2fb");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,81,107,219,48,16,126,47,244,63,28,126,178,33,136,245,117,221,10,75,72,75,33,116,101,113,7,99,236,65,145,47,142,134,44,25,157,156,46,27,251,239,59,73,73,155,58,29,244,176,177,117,247,233,187,251,62,206,202,14,169,151,10,161,70,239,37,185,117,16,51,103,215,186,29,188,12,218,217,243,179,63,231,103,192,49,144,182,45,44,119,20,176,187,60,78,29,95,236,58,103,255,91,244,40,230,54,232,160,145,222,130,17,243,45,218,112,128,126,79,233,93,202,45,52,15,97,209,151,75,181,193,78,222,177,6,248,8,197,3,249,111,82,109,2,21,213,143,124,169,31,86,70,43,80,70,18,65,170,189,194,2,239,97,42,9,95,169,100,146,189,254,35,62,183,229,137,117,131,176,117,186,129,207,118,41,183,172,163,116,171,159,168,2,16,218,6,253,4,50,225,20,215,44,42,209,126,242,45,1,86,207,116,71,204,49,86,60,133,120,98,59,208,96,117,249,18,150,121,97,23,229,176,236,50,159,171,140,31,97,27,84,186,147,6,122,175,85,244,40,93,18,55,24,234,93,143,205,204,153,161,179,95,165,25,240,195,30,121,85,70,27,239,35,188,24,55,214,107,40,51,209,21,92,188,75,81,189,68,140,4,197,64,113,75,51,105,21,26,108,120,128,224,7,100,218,83,28,5,31,119,129,183,145,100,139,53,118,189,145,33,142,108,241,17,22,78,73,163,127,203,149,193,101,194,149,89,200,3,161,231,109,181,108,59,175,170,248,130,228,6,175,24,227,60,147,76,224,180,77,140,167,69,201,11,86,76,160,56,105,64,34,217,114,75,181,115,83,221,230,83,81,137,218,237,7,168,222,160,130,167,207,9,113,237,124,39,67,57,82,199,141,47,128,93,76,239,253,226,238,196,241,24,97,227,221,99,114,97,254,75,97,31,133,30,120,198,240,191,207,199,253,47,127,248,249,7,222,30,44,242,229,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("fbd2ff67-17bd-7d5d-3ca4-36ba509a943c"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("ff4cbc16-aad7-4e81-93df-3f39659dc2fb"),
				CreatedInSchemaUId = new Guid("a754ba40-dc04-40c1-b15e-c9d01450fcac"),
				ModifiedInSchemaUId = new Guid("a754ba40-dc04-40c1-b15e-c9d01450fcac")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a754ba40-dc04-40c1-b15e-c9d01450fcac"));
		}

		#endregion

	}

	#endregion

}

